import Connectionpage from "../../pages/Connection_page_element";
import ClickMethod from "../../pages/generic_method/click_method";
import { logStep } from "../../support/e2e";

export const ClickonProfileIcon = () => {
  logStep("Clicking on Profile Icon");
  return ClickMethod.clickElement("#userDropdown > .userThumb");
};
export const ClickonClassification = () => {
  logStep("Clicking on Classification");
  return ClickMethod.clickElement("a[title='Classification']");
};
export const ClickonParentitle = () => {
  logStep("Clicking on Process Classification");
  return cy.get("span.node-title");
};
export const ClickonOwnerClassification = () => {
  logStep("Clicking on Classification");
  cy.get(".classification-wrapper").then(($wrapper) => {
    const $tagsInput = $wrapper.find(".bootstrap-tagsinput");
    const tags = $tagsInput.find("span.tag.label.label-info");

    if (tags.length > 0) {
      // remove first tag, then click input
      cy.wrap($tagsInput)
        .find('span[data-role="remove"]')
        .first()
        .click({ timeout: 10000, force: true })
        .then(() => {
          cy.wrap($wrapper)
            .find('#graph_hierarchy')
            .click({ force: true });
        });
    } else {
      // no tags → just click input
      cy.wrap($wrapper)
        .find('#graph_hierarchy')
        .click({ force: true });
    }
  });
};

export const SelectOnOwnerClassificationtab = () => {
  logStep("Clicking on Classification");
  return cy
    .contains(".custom-node .node-title", "parent",{ timeout: 50000 })
    .click()
    .wait(2000, { log: false });
};

export const clickCategoryByTitle = (categoryTitle) => {
  logStep(`Clicking on Category '${categoryTitle}'`);

  cy.get('[data-testid="pc-categories-panel"]', { timeout: 10000 })
    .should('exist')
    .then(($panel) => {
      // Check for List View
      if ($panel.find('[data-testid="pc-category-list-view"]').length) {
        cy.wrap($panel).get(`div[data-testid^="pc-category-item-"]:contains("${categoryTitle}")`)
          .last()
          .click({ force: true });
      }

      // Check for Box View
      else if ($panel.find('[data-testid="pc-category-box-view"]').length) {
        cy.wrap($panel).get(`div[data-testid^="pc-box-"]:contains("${categoryTitle}")`)
          .last()
          .click({ force: true });
      }
    });
};

export const ClickonRemoveNode = () => {
  logStep("Clicking on remove Node");
  return cy
    .wait(5000, { log: false })
    .contains(".custom-node .node-title", "parent", { timeout: 20000 })
    .parents(".custom-node")
    .within(() => {
      cy.get('button[title="Remove Node"]')
        .click({ force: true, timeout: 20000 })
        .wait(2000, { log: false });
    });
};
export const ClickonConfirmNode = () => {
  logStep("Clicking on Confirm Node");
  return ClickMethod.clickElement("#confirmYes");
};
export const Click_on_Administrate_Classification = () => {
  logStep("Clicking on Administrate Classification");
  return ClickMethod.clickElement(" a[title='Administrate Classification']");
};
export const Click_on_add_node_button = () => {
  logStep("Clicking on Add node button");
  return ClickMethod.clickElement(
    "#addNodeModel > .modal-dialog > .modal-content > .modal-footer > :nth-child(1)"
  );
};

export const Checking_node_is_avalible = () => {
  logStep("Checking if 'Parent' node exists");

   cy.get("div.custom-node .node-title").then(($nodes) => {
            const exists = Array.from($nodes).some(
              (n) => n.innerText.trim().toLowerCase() === "parent"
            );
            cy.wrap(exists).as("parentExists");
          });
};
export const Handle_parent_node_creation = () => {
  logStep("Handling Parent node creation based on existence");
  
  return cy.get("@parentExists").then((exists) => {
    if (exists) {
      cy.log("Parent already exists → SKIP CREATION");
      return;
    }

    cy.log("Parent NOT found → Creating parent + child + sub-child");
  });
};

export const Click_on_Root_Node_plus_button = () => {
  logStep("Clicking on Process Classification Plus button");
  return cy
    .get('li[data-uid="-1"]', { timeout: 20000 })
    .first()
    .find('> .e-text-content .custom-node button[title="Add Node"]', { timeout: 20000 })
    .click({ timeout: 20000 });
};
export const Click_on_plus_button = (title) => {
  logStep("Clicking on Process Classification Plus button");
  return cy
    .contains(".custom-node .node-title", title, { timeout: 20000 })
    .parents(".custom-node")
    .find('button[title="Add Node"]', { timeout: 20000 })
    .click({ timeout: 20000 });
};

export const ClickonConnection = () => {
  logStep("Clicking on Connection");
  return ClickMethod.clickElement(
    "span.show > .dropdown-menu > :nth-child(5) > a"
  );
};
export const clickonInvitefriends = () => {
  logStep("Clicking on Invite Friends");
  return ClickMethod.clickElement("#openGraphTabs > :nth-child(4) > a").then(
    () => {
      return Connectionpage.SearchConnection("uzair");
    }
  );
};
export const Click_on_icon = (icon) => {
  logStep(`Clicking on ${icon}`);
  return ClickMethod.clickElement(icon);
};
export const click_on_Invite_sent = () => {
  logStep("Clicking on Invite Sent");
  return ClickMethod.clickElement(".panel-body > .ui > .btn");
};
export const Click_on_Send_Invitation_Button = () => {
  logStep("Clicking on Send Invitation Button");
  return cy.contains('button', 'Send invitation').wait(2000, { log: false }).click();
};
/**
 * Check if a given email exists in the Pending Invitations table
 * @param {string} email - Email to check
 * @returns Cypress.Chainable<boolean>
 */
export const isEmailInInvitationsTable = (email) => {
  return cy.wait(2000, { log: false }).get("#pendingInvitationsTable tbody tr td:first-child").then(($cells) => {
    const exists = Array.from($cells).some((cell) => cell.innerText.trim() === email);
    return cy.log(exists ? `Email "${email}" found ✅` : `Email "${email}" not found ❌`).then(() => exists);
  });
};

export const Enter_email_Invite_Users_To_Organization = (email) => {
  logStep("Clicking on Invite Sent");
  return cy.get("input[placeholder='Email address']").type(email)
};
// export const Click_on_Remove_Invitation = () => {
//   logStep("Clicking on Remove Invitation");
//   return cy.get("span[title='Remove Invitation']").click({ multiple: true, force: true });
// }

/**
 * Delete a specific email from the Pending Invitations table
 * @param {string} email - The email to delete
 */
export const Click_on_Remove_Invitation = (email) => {
  // Find the row with the email and verify it
  cy.get("#pendingInvitationsTable tbody tr").contains("td", email).closest("tr").then(($row) => {
    // Verify email matches
    const emailText = $row.find("td:first-child").text().trim();
    expect(emailText).to.eq(email); // Ensure it's the correct email
  });

  // Click the "Remove Invitation" button (trash icon) - requery to avoid stale element
  cy.get("#pendingInvitationsTable tbody tr").contains("td", email).closest("tr")
    .find('span[title="Remove Invitation"]').click();

  // Log the deletion
  cy.log(`Deleted invitation for: ${email}`);

  // Optionally confirm deletion if there is a confirmation dialog
  // cy.get('#confirmYes').click();

  // Wait for the row to be removed and verify the email is no longer in the table
  // cy.get("#pendingInvitationsTable tbody", { timeout: 10000 }).should("not.contain.text", email);
};




// export const click_on_copy_url_and_open_url = () => {
//   logStep("Clicking on Copy URL and open URL");

//   return cy.window()
//     .then((win) => {
//       cy.spy(win.navigator.clipboard, "writeText").as("copySpy");
//     })
//     .then(() => {
//       cy.wait(100, { log: false }); // ensure spy is attached

//       cy.get("span[title='Copy Link']", { timeout: 10000 }).click({ multiple: true, force: true });
//         })
//         .then(() => {
//       cy.get("@copySpy", { timeout: 10000 })
//         .should("have.been.called")
//         .then((spy) => {
//           const copiedUrl = spy.args[0][0];
//           cy.log("Copied URL: " + copiedUrl);

//           cy.visit(copiedUrl, { timeout: 20000 });
//         });
//     });
// };
/**
 * Click the "Copy Link" button for a specific email and open the copied URL
 * @param {string} email - The email whose copy link should be clicked
 */
export const click_on_copy_url_and_open_url = (email) => {
  logStep(`Clicking on Copy Link for email: ${email} and opening URL`);

  return cy.window().then((win) => {
    // Spy on the clipboard
    cy.spy(win.navigator.clipboard, "writeText").as("copySpy");
  })
  .then(() => {
    cy.wait(3000, { log: false }); // ensure spy is attached

    // Find the row with the specific email
    cy.get("#pendingInvitationsTable tbody tr").contains("td", email)
      .parents("tr")
      .find("span[title='Copy Link']")
      .click({ force: true });
  })
  .then(() => {
    cy.get("@copySpy", { timeout: 10000 })
      .should("have.been.called")
      .then((spy) => {
        const copiedUrl = spy.args[0][0];
        cy.log("Copied URL: " + copiedUrl);

        // Visit the copied URL
        cy.visit(copiedUrl, { timeout: 20000 });
      });
  });
};



export const clickonlogout = () => {
  logStep("Clicking on Logout");
  return ClickMethod.clickElementContainingText("Sign out");
};
export const clickonnotificationicon = () => {
  logStep("Clicking on Notification Icon");
  return ClickMethod.clickElement("#notificationsDD");
};
export const clickonpendingrequest = () => {
  logStep("Clicking on Pending Request");
  return ClickMethod.clickElement("#openGraphTabs > :nth-child(3) > a");
};
export const Click_on_DesignerSettings = () => {
  logStep("Clicking on Designer Settings");
  return ClickMethod.clickElement("span.show > .dropdown-menu > :nth-child(4)");
};
