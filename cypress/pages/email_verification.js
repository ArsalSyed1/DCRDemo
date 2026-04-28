class EmailVerification {
    // Adjust sender filter here

    static query = '(from:mailbot@dcrsolutions.net OR from:info@dcrsolutions.net OR from:rmail@dcrsolutions.net)';


    // -------------------------
    // Step 1: Get emails
    // -------------------------
    getEmails() {

        cy.log('📥 Fetching emails for registration...');
        return cy.task('getEmails', EmailVerification.query).then((emails) => {
            if (!emails || emails.length === 0) {
                cy.log('❌ No emails found.');
                throw new Error('No emails found.');
            }

            cy.log(`📩 Total Emails Found: ${emails.length}`);
            return cy.wrap(emails);
        });
    }

    // -------------------------
    // Step 2: Decode Base64 email body (robust Gmail handling)
    // -------------------------

    decodeEmailBody(email) {
        cy.log('🧩 Decoding email body...');

        if (!email || typeof email !== 'object') {
            throw new Error('Invalid email object.');
        }

        let decodedBody = null;

        // Helper: Safe Base64 decode
        const decodeBase64 = (data) => {
            try {
                return Buffer.from(data, 'base64').toString('utf8');
            } catch (err) {
                cy.log(`⚠️ Base64 decode error: ${err.message}`);
                return null;
            }
        };

        // 1️⃣ Direct body (rare simple case)
        if (email.body?.data) {
            decodedBody = decodeBase64(email.body.data);
        }

        // 2️⃣ Gmail payload direct
        else if (email.payload?.body?.data) {
            decodedBody = decodeBase64(email.payload.body.data);
        }

        // 3️⃣ Multipart structure (common Gmail HTML emails)
        else if (email.payload?.parts?.length) {
            const findHtmlPart = (parts) => {
                for (const part of parts) {
                    if (part.mimeType === 'text/html' && part.body?.data) {
                        return decodeBase64(part.body.data);
                    }
                    if (part.parts) {
                        const nested = findHtmlPart(part.parts);
                        if (nested) return nested;
                    }
                }
                return null;
            };

            decodedBody = findHtmlPart(email.payload.parts);

            // Fallback to text/plain if no HTML part
            if (!decodedBody) {
                const findTextPart = (parts) => {
                    for (const part of parts) {
                        if (part.mimeType === 'text/plain' && part.body?.data) {
                            return decodeBase64(part.body.data);
                        }
                        if (part.parts) {
                            const nested = findTextPart(part.parts);
                            if (nested) return nested;
                        }
                    }
                    return null;
                };
                decodedBody = findTextPart(email.payload.parts);
            }
        }

        if (!decodedBody || decodedBody.trim() === '') {
            cy.log('❌ No readable content found in email.');
            cy.task('log', JSON.stringify(email, null, 2)); // optional debug
            throw new Error('No readable content found in email.');
        }

        cy.log('✅ Email body decoded successfully.');
        return decodedBody;
    }

    // -------------------------
    // Step 3: Extract Complete Registration Link
    // -------------------------

    extractRegistrationLink(decodedBody) {
        cy.log('🔍 Extracting "Complete Registration" link...');

        if (!decodedBody || typeof decodedBody !== 'string') {
            throw new Error('Invalid decoded email body.');
        }

        let link = null;

        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(decodedBody, 'text/html');
            const anchorTags = doc.querySelectorAll('a');

            anchorTags.forEach((anchor) => {
                const text = anchor.textContent?.trim().toLowerCase() || '';
                const href = anchor.getAttribute('href') || '';

                if (text === 'complete registration' && href.startsWith('https://')) {
                    link = href;
                } else if (href.includes('complete-signup')) {
                    link = href;
                } else if (href.toLowerCase().includes('registration') || href.toLowerCase().includes('signup')) {
                    link = href;
                } else if (text.includes('registration') || text.includes('signup')) {
                    link = href;
                }
            });

            // Fallback regex
            if (!link) {
                const fallbackMatch = decodedBody.match(/https?:\/\/[^\s"'<>]+(registration|signup)[^\s"'<>]*/i);
                if (fallbackMatch) {
                    link = fallbackMatch[0];
                    cy.log('⚠️ Using fallback regex match.');
                }
            }

            if (!link) {
                cy.log('❌ Still no link found in the email body.');
                throw new Error('No registration link found in the email body.');
            }

            // Clean Gmail redirect
            if (link.includes('google.com/url?q=')) {
                cy.log('🔄 Cleaning Gmail redirect...');
                const cleaned = decodeURIComponent(link.split('q=')[1].split('&')[0]);
                link = cleaned;
            }

            // Decode HTML entities
            link = link.replace(/&amp;/g, '&').trim();

            // Ensure port according to ENV
            try {
                const urlObj = new URL(link);
                if (!urlObj.port) {
                    const env = Cypress.env('ENV');
                    if (env === 'test' || env === 'demo') {
                        urlObj.port = '43443';
                    } else if (env === 'prodIIS01') {
                        urlObj.port = '41443';
                    } else {
                        urlObj.port = '43443';
                    }
                }
                link = urlObj.toString();
            } catch (err) {
                cy.log(`❌ URL parsing error: ${err.message}`);
                throw new Error('Invalid registration link format.');
            }

            cy.log(`✅ Extracted Registration Link: ${link}`);
            return cy.wrap(link);
        } catch (error) {
            cy.log(`❌ Error while parsing email: ${error.message}`);
            throw error;
        }
    }

    // -------------------------
    // Step 4: Visit Registration Link
    // -------------------------
    visitRegistrationLink(link) {
        cy.log(`🌐 Visiting registration link: ${link}`);
        return cy.visit(link, { failOnStatusCode: false });
    }
}

export default EmailVerification;

