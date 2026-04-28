const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const CREDENTIALS_PATH = path.resolve(__dirname, 'credentials.json'); // Update path if necessary
const TOKEN_PATH = path.resolve(__dirname, 'token.json');

// Authenticate with Gmail API
function authenticate() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    throw new Error(`Missing credentials.json at ${CREDENTIALS_PATH}.`);
  }

  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf-8'));
  const { client_id, client_secret, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf-8'));
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
  } else {
    throw new Error(`Missing token.json. Run the authentication script to generate a token.`);
  }
}

// Fetch Gmail emails based on query
async function fetchEmails(query) {
  const auth = authenticate();
  const gmail = google.gmail({ version: 'v1', auth });

  const res = await gmail.users.messages.list({
    userId: 'me',
    q: query,
  });

  const messages = res.data.messages || [];
  const emails = [];

  for (const message of messages) {
    const msg = await gmail.users.messages.get({
      userId: 'me',
      id: message.id,
    });
    emails.push(msg.data);
  }

  return emails;
}

module.exports = { fetchEmails };

  