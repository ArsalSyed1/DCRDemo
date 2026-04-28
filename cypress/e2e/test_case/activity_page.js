import Activitypage from "../../pages/Activity_page";
import clickmethod from "../../pages/generic_method/click_method";
import DropDown from "../../pages/generic_method/Drop_down";
import EnterValue from "../../pages/generic_method/enter_value";
import { logStep } from "../../support/e2e";

export const activitypagetest = (eventId, eventId2) => {
  return Activitypage.clickOnactivitybutton("#toolbar #newEvent").then(() => {
    logStep("Clicked on activity button");
    return Activitypage.clickOnactivitybutton("#toolbar #newEvent").then(() => {
      logStep("Clicked on activity button");
      return Activitypage.clickAndDragActivityBoxToRight(-400, 0).then(() => {
        logStep("Dragged activity box to right");
        return Activitypage.addResponseline(eventId, eventId2).then(() => {
          logStep("Added response line");
        });
      });
    });
  });
};

export const Click_on_activity_button = () => {
  logStep("Clicking on activity button");
  return Activitypage.clickOnactivitybutton("#toolbar #newEvent");
};
export const Right_Click = () => {
  logStep("Right clicking on rule tail");
  return cy.get("body").then(($body) => {
    if ($body.find(".ruleTail.eRelation").length > 0) {
      console.log("Right clicking on rule tail");
      return clickmethod.rightClickElement(".ruleTailExtension");
    } else if ($body.find(".arrowHead.eRelation").length > 0) {
      console.log("Right clicking on arrow head");
      return clickmethod.rightClickElement(".arrowHead.eRelation");
    }
  });
};
export const add_Comments_on_activity = (eventId2) => {
  return cy.get(`path[data-type="activityBody"][title="${eventId2}"]`, { timeout: 1000 })
    .should('exist')
    .rightclick({ force: true })
    .then(() => {
      logStep("Right clicked on activity box");
      return Click_on_add_comments();
    });
};
export const Click_on_add_comments = (isRule = false) => {
  logStep("Adding comments text");
  if (isRule) {
    return clickmethod.clickElement('[data-val="cAddRuleComment"]');
  } else {
    return clickmethod.clickElement('#designComment-item');
  }
};
export const Enter_comments_text = (text) => {
  logStep("Entering comments text");
  return cy.get('#designCommentBox_ifr', { timeout: 10000 })
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
    .click()
    .type(text, {timeout: 10000 , force: true })
    .then(() => {
      logStep("Click on add comments button");
      return clickmethod.clickElement("input[title='Ok']");
    });
};

export const Click_on_delete_button = () => {
  logStep("Clicking on delete button");
  return clickmethod.clickElement("a[data-val='cdelete']");
};
export const Add_lines_between_activities = (eventId, eventId2) => {
  logStep("Adding lines between activities");
  return Activitypage.addlinesbetweenactivities(eventId, eventId2);
};
export const getRulesWizard = () => {
  logStep("Getting rules wizard");
  return clickmethod.clickElement("#rules-wizard");
};
export const Click_on_response_line = () => {
  logStep("Clicking on response line");
  return clickmethod.clickElement(":nth-child(3) > .btn > .d-inline-block");
};

export const clickonactivitybox = (eventId) => {
  logStep("Clicking on activity box");
  return clickmethod.clickElement(
    `path[data-type="activityBody"][event-id="${eventId}"]`
  );
};
export const selectdatatypedropdown = () => {
  logStep("Selecting data type from dropdown");
  return DropDown.selectOption(
    ":nth-child(7) > .row > .col-lg-10 > .form-control",
    "text"
  );
};
export const textOption_DisplaySize = () => {
  logStep("Setting text option display size");
  return EnterValue.selectOrEditValue(
    "#formDisplaySize",
    ":nth-child(7) > .row > #editDataValue > .far",
    "#formDisplaySize",
    "Large"
  );
};

export const textOption_Placeholder = () => {
  logStep("Setting text option placeholder");
  return EnterValue.enterValue("#dataTypePlaceHolder", "Activity_Abc");
};

export const TextOption_HintText = () => {
  logStep("Setting text option hint text");
  return EnterValue.enterValue("#dataTypeHintText", "Activity_Abc");
};

export const ClickonDoneButton = () => {
  logStep("Clicking on Done button");
  return clickmethod.clickElement("#setUpDataType");
};

export const Reload = () => {
  logStep("Reloading activity page");
  return Activitypage.Reload();
};
export const selectactivity = () => {
  logStep("Selecting activity");
  return Activitypage.Selectactivity();
};
export const Click_On_Sequence_text = () => {
  logStep("Clicking on Sequence text");
  return clickmethod.clickElement('[data-id="Activity0"]');
};
export const Click_On_Sequence_Form_tab = () => {
  logStep("Clicking on Sequence Form tab and closing");
  return clickmethod
    .clickElement("#formSequenceTabs > :nth-child(3) > a")
    .then(() => cy.wait(5000, { log: false })) // wait for 5000ms
    .then(() => clickmethod.clickElement("#formSequenceClose"));
};
