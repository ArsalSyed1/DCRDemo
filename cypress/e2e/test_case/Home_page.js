import Home_page from '../../pages/Home_page';
import ClickMethod from '../../pages/generic_method/click_method';
import { logStep } from '../../support/e2e';

export const Homepage = () => {
    logStep('Navigating to homepage');
    return ClickMethod.clickElement('#selectedOrganization');
};
export const FavoriteIcon = () => {
    logStep('Navigating to favorite icon');
    return Home_page.clickonFavoriteicon();

};
export const likeIcon = () => {
    logStep('Navigating to like icon');
    return Home_page.clickonLickicon();
};
export const switchOrganization = (targetOrg) => {
    logStep(`Switching organization to: ${targetOrg}`);
    return Home_page.switchOrganization(targetOrg);
}