import 'cypress-real-events/support';
import { visitpage, Username,Auth_hub_Username, Password, VerifyUsername,VerifyPassword,ClickonLoginButton,Auth_hub_LoginButton,Auth_hub_Password ,Auth_hub_Continue} from '../test_case/login_page.js';
import { Click_On_Global_checkBox, Click_On_Levels, Click_On_Templtes_Button, Click_On_Filter_Button, Click_on_Create_graph_button,Click_on_Update_graph_button, createprocesspage, negativecreateprocesspage, Refreshpage, Share, Click_On_Comment_Button, Share_public_link, Deletekeyword } from '../test_case/create_process_page.js';
import { Click_on_delete_button, Right_Click, Click_on_activity_button,textOption_DisplaySize,getRulesWizard,Click_on_response_line, textOption_Placeholder, Enter_comments_text,Click_on_add_comments,add_Comments_on_activity,TextOption_HintText, ClickonDoneButton, activitypagetest,Add_lines_between_activities, clickonactivitybox, selectdatatypedropdown, Reload, Click_On_Sequence_text, Click_On_Sequence_Form_tab } from '../test_case/activity_page.js';
import { genericSearchTest, genericSearchforProcessAp, ClickonSearchitem, onlySearch, Search, open_the_graph } from '../test_case/generic_search_page.js';
import { Click_On_Save_Button, Click_On_Create_new_flow_Button,Click_On_Create_new_flow_Button_on_dashboard, verifyswinlane, recommendation_test, entersimulationtitle, clickonsaveandexitbutton, clickonrerunbutton, Scroll, clickonsimulationHistory, clickonSimulationdropdown, clickondiscardbutton,click_on_DMN_icon, clickonexitbutton, Scrolltotheexecutebutton, Click_on_Analyze_button, Click_on_View_summary_button, Click_on_Annotation_button, Click_On_Flow_checkboxes, Click_On_Analyse_flow, Click_On_Validate_flow, Click_On_Process_Simulate_Details, Click_On_Import_Flow, Click_On_Export_Flow, Click_On_File_tab, click_on_Open_button, clickOnrendercheckbox, clickOnExecuteButton,Verify_activity, enterValueInField, VerifyExecutedIcon } from '../test_case/Recommendation_page.js';
import { Click_on_Lazy_user, Click_on_Aggressive_user, Click_on_Robot_user,verify_text_inside_field, verify_Effect_Logs, validateSimulationComputationValues,Click_on_advance_time, Select_language_dropdown, Click_On_ActivityButton, Click_on_advance_Button,Click_on_advance_simulation_button, Click_On_Calendar_icon,enter_Value_in_Computation, Click_On_Simulate_Button, Click_on_Start_Simulation_Button, click_On_Execute_Button, verify_swin_lane } from '../test_case/computations_page.js';
import { ProcessDiscovery_test, click_on_Process_dicovery_App, click_on_Find_rule_button, click_on_DCR_Publisher, click_on_Xlsheet_button, } from '../test_case/process_discovery_page.js';
import { Signup_page_test, Signup_page_for_auth_hub,Signup_Profile_page, Forgotpassword, enterforgetpassworddetails, clickonchangepassword } from '../test_case/sign_up_page.js';
import { Homepage, FavoriteIcon, likeIcon, switchOrganization } from '../test_case/Home_page.js';
import { enter_text_in_field,enter_text_in_description_field, just_click,click_on_cross_button, click_on_close_button, click_on_close_button_with_APi, verify_start_Field, verify_End_Field, checkExecutedvalues,Select_field_value_with_checkbox, Select_field_value } from '../test_case/fregmentation_page.js';
import { verifyEmail } from '../test_case/email_verification.js';
import { clickonapp, clickonsearchflow, Start_event_inputfield, clickbutton, Stop_event_inputfield } from '../test_case/app_page.js';
import { Click_on_DesignerSettings,Checking_node_is_avalible,Handle_parent_node_creation,Click_on_add_node_button,ClickonRemoveNode,ClickonConfirmNode,SelectOnOwnerClassificationtab, clickCategoryByTitle, Click_on_plus_button,Click_on_Administrate_Classification,ClickonParentitle,Click_on_Root_Node_plus_button,ClickonOwnerClassification, ClickonProfileIcon,isEmailInInvitationsTable,Click_on_Remove_Invitation, click_on_copy_url_and_open_url,Click_on_Send_Invitation_Button,Enter_email_Invite_Users_To_Organization,ClickonClassification,ClickonConnection, click_on_Invite_sent, Click_on_icon, clickonInvitefriends, clickonlogout, clickonnotificationicon, clickonpendingrequest, } from '../test_case/Connection_page.js';
// import { verifyEmailss } from '../test_case/Forgetpassword.cy.js';
import { editbutton, showSequence,  } from '../test_case/Activity_editor_page.js';
import { Enter_Name_in_add_role_Field,Click_on_Edit_role_icon,Click_on_Confirm_Delete_role_button,Enter_text_In_add_role_Field,Click_on_Delete_role_button, Add_Edit_role_Field, Click_on_Update_role_button, Click_on_Edit_role_button,Click_on_process_Sheet, Click_on_Add_KPI_button,Enter_KPI_text_input,Click_on_Delete_KPI_Button,Enter_KPI_sequence_input,Click_on_Edit_KPI_Button,Click_on_KPI_save_button,Click_on_KPI_close_button,KPI_Tab,Edit_process_title,OwnerShip_Tab, Resources_Tab,Click_on_Import_button, Click_on_Close_button, Add_role_button, Add_role_Field, Choose_role_name, Click_on_add_button } from '../test_case/Resources_page.js';
import { Click_on_Import_Flow_Button, Click_on_Continue_import_button, Click_on_file_tab, Click_on_Import_file, Click_on_Chosse_File } from '../test_case/Import_graph_page.js';
import { click_on_Edit_profile, click_on_Update_profile, click_on_Upload_pic } from '../test_case/Profie_page.js';
import { Click_on_governance_tab, Click_on_Title_filter,Click_on_process_tab,Click_On_filters,uncheckfilters,Click_on_Ok_button, verifyExportJSON, Click_on_Simple_category_setup_check_box,click_on_CheckBox, Click_on_user_tab, Click_on_Administration_icon, verifyEffectPackageAddAndRemove, verifyEffectEnableAndDisable, openEffectAdministrationPage, verifyEditCustomEffects, Select_Host_system } from '../test_case/Administration_page.js';
import { click_on_first_icon, Click_on_delete_drop_down_button,Click_on_delete_button_of_collection,Click_on_Instances_button, ScrollInto, Click_On_Create_Button,click_on_DCR, click_on_Category, click_on_Collection_checkbox,click_on_New_Collection, click_on_New_Category, enter_text } from '../test_case/Category_page.js';
import { Click_on_Export_Graph,Click_On_Revision_History_list, Click_On_Revision_History, Click_On_DCRDoc, Click_On_AboutDCR, Click_On_startDCRTour, Click_On_Help_tab, Click_On_DCR_Rule_Assistance, Click_On_Restart_Simulation, Click_On_Pause_Simulation, Click_On_Exit_Simulation, Click_On_AddInitSimulation, Click_On_New_activity, Click_On_New_Sub_graph, Click_On_Add_New_fragmentaion, Click_On_Insert_tab, Click_on_show_Revision_Details, Click_on_show_Revision_History, Click_on_Export_as_PNG, click_on_open_menu, click_on_Save_DCR_Process_As, click_on_Save_DCR_Process_As_button, Click_on_Export_as_xml,click_on_export_excel, Click_on_Export_as_SVG } from '../test_case/menuTabs.js';

const tests = {
    click_on_Upload_pic, Click_On_Flow_checkboxes, Click_on_View_summary_button, Click_on_Annotation_button, Click_on_Analyze_button, Click_On_Import_Flow, Click_on_DesignerSettings, Click_On_Revision_History_list,click_on_export_excel, Click_On_Revision_History, Click_On_DCR_Rule_Assistance, Click_On_Help_tab, Click_On_DCRDoc, Click_On_AboutDCR, Click_On_startDCRTour,
    Click_On_Restart_Simulation, Click_On_Pause_Simulation, Click_On_Exit_Simulation, Click_On_AddInitSimulation, Click_On_New_activity, Click_On_New_Sub_graph,
    Click_On_Add_New_fragmentaion, Click_On_Insert_tab, Click_on_show_Revision_Details, Click_on_show_Revision_History,Auth_hub_Password,Click_on_Update_graph_button,
    click_on_open_menu, click_on_Save_DCR_Process_As, click_on_Save_DCR_Process_As_button, Click_on_Export_as_xml, Click_on_Export_as_SVG, Click_on_Export_as_PNG,
    Click_on_governance_tab, Click_on_Title_filter,Select_Host_system, click_on_first_icon, Click_on_delete_drop_down_button, ScrollInto, Click_On_Create_Button, enter_text, click_on_Update_profile,
    click_on_Edit_profile, visitpage, switchOrganization, clickonInvitefriends, clickonlogout, VerifyUsername,VerifyPassword,ClickonLoginButton,Auth_hub_LoginButton,
    Click_On_Sequence_text, Click_On_Sequence_Form_tab, click_on_DMN_icon,Verify_activity,Auth_hub_Continue,Click_on_activity_button,Click_on_plus_button,Select_language_dropdown,
    Password, clickonpendingrequest, Click_on_Administration_icon,Click_on_Simple_category_setup_check_box, verifyExportJSON, click_on_CheckBox, openEffectAdministrationPage, Select_field_value_with_checkbox, clickOnExecuteButton,
    click_on_Category, click_on_New_Category, Click_On_Levels, Click_On_Global_checkBox, click_on_New_Collection,OwnerShip_Tab,Click_on_process_Sheet,
    Username,Auth_hub_Username, clickOnrendercheckbox, VerifyExecutedIcon, ClickonSearchitem, Forgotpassword, Click_on_user_tab, Click_on_process_tab,Click_On_filters,uncheckfilters,Click_on_Ok_button,
    clickonnotificationicon, enterValueInField, Scrolltotheexecutebutton, Click_on_icon, click_on_Invite_sent,isEmailInInvitationsTable,Click_on_Send_Invitation_Button,Click_on_Remove_Invitation,Enter_email_Invite_Users_To_Organization,getRulesWizard,Click_on_response_line,click_on_copy_url_and_open_url,
    Deletekeyword, Scroll, Reload, clickonexitbutton, clickondiscardbutton, clickonsearchflow, Start_event_inputfield, Stop_event_inputfield, verifyEditCustomEffects,
    clickonSimulationdropdown, clickonsimulationHistory, Click_on_Robot_user, Click_on_Lazy_user, Click_on_Aggressive_user,
    clickonactivitybox, Add_lines_between_activities,clickonrerunbutton, entersimulationtitle, clickbutton,click_on_Collection_checkbox,
    clickonsaveandexitbutton, clickonchangepassword, Click_On_ActivityButton, Click_on_advance_Button,Click_on_Import_button,Click_On_Calendar_icon,Click_on_advance_time,
    click_On_Execute_Button, verify_swin_lane, Click_On_Simulate_Button, enter_Value_in_Computation, Click_on_Start_Simulation_Button,Click_on_advance_simulation_button,
    selectdatatypedropdown, verify_Effect_Logs, validateSimulationComputationValues, click_on_Process_dicovery_App, click_on_Find_rule_button,ClickonOwnerClassification,SelectOnOwnerClassificationtab, clickCategoryByTitle,
    textOption_DisplaySize, textOption_Placeholder, TextOption_HintText, ClickonDoneButton, enterforgetpassworddetails,Click_on_Instances_button,
    editbutton, showSequence, enter_text_in_field, just_click, click_on_close_button, click_on_close_button_with_APi, verify_start_Field, verify_End_Field,
    click_on_Open_button, Edit_process_title,Click_on_delete_button_of_collection,enter_text_in_description_field,
    ClickonConnection, Resources_Tab, KPI_Tab,Click_on_Edit_role_button, Add_role_button, Add_role_Field, Choose_role_name, Click_on_add_button, Click_on_Close_button,
    ClickonProfileIcon, Click_on_Update_role_button,ClickonClassification,ClickonParentitle,Signup_page_for_auth_hub,
    Add_Edit_role_Field, Click_on_Delete_role_button,Click_on_Administrate_Classification,
    createprocesspage, Click_on_file_tab, Click_on_Import_file, Click_on_Chosse_File,Click_on_Export_Graph,
    negativecreateprocesspage, Right_Click, Click_On_Analyse_flow, Click_On_Validate_flow, Click_On_Process_Simulate_Details, Click_On_File_tab, Click_On_Import_Flow, Click_On_Export_Flow,
    Refreshpage, Click_on_Continue_import_button, Click_on_Import_Flow_Button,
    activitypagetest,Enter_comments_text, Click_on_add_comments,add_Comments_on_activity,Click_on_Create_graph_button,Click_on_Root_Node_plus_button,click_on_DCR,
    genericSearchTest, Click_On_Save_Button,Click_on_add_node_button,click_on_cross_button,Checking_node_is_avalible,Handle_parent_node_creation,
    genericSearchforProcessAp, Click_On_Templtes_Button, Click_On_Filter_Button,
    recommendation_test,ClickonRemoveNode,ClickonConfirmNode,Click_on_Edit_KPI_Button,
    ProcessDiscovery_test,verify_text_inside_field, verifyEffectPackageAddAndRemove, verifyEffectEnableAndDisable,
    click_on_DCR_Publisher,Click_on_Add_KPI_button,Enter_KPI_text_input,Enter_KPI_sequence_input,Click_on_KPI_save_button,Click_on_KPI_close_button,Click_on_Delete_KPI_Button,
    click_on_Xlsheet_button, Click_on_delete_button,
    click_on_DCR_Publisher,Enter_text_In_add_role_Field,Enter_Name_in_add_role_Field,
    click_on_Xlsheet_button, Click_on_delete_button,Click_on_Edit_role_icon,Click_on_Confirm_Delete_role_button,
    Signup_page_test,
    Share, Share_public_link, Click_On_Comment_Button, verifyswinlane, Click_On_Create_new_flow_Button,Click_On_Create_new_flow_Button_on_dashboard,
    Signup_Profile_page,
    Homepage,
    onlySearch,
    FavoriteIcon,
    likeIcon,
    verifyEmail,
    Search,
    open_the_graph,
    Select_field_value, checkExecutedvalues,
    clickonapp
};

export default tests;




