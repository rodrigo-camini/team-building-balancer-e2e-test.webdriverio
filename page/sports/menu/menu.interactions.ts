import ClickCustomCommands from "../../../utils/customCommands/clickCustomCommands";
import MenuElements from "./menu.elements";

const clickCustomCommands = new ClickCustomCommands()

export default class MenuInteractions extends MenuElements {

    /**
     * Method to click on the sports screen menu
     */
    protected async clickBtnMenu() {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.btnMenu, 'Menu')
    }

    /**
     * Method to click the Sign Out button in the sports screen menu
     */
    protected async clickBtnSignOut() {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.btnSignOut, 'Sing Out')
    }

    /**
     * Mapping to wait for the Sign Out button in the menu.
     */
    protected async waitBtnSignOut() {
        await super.btnSignOut.waitForDisplayed()
    }

    /**
     * Method to return the logged-in user's name.
     * @returns 
     */
    protected async getTextLblUserLogged() {
        await super.lblUserLogged.waitForDisplayed({ timeoutMsg: "O menu com nome do usuário logado não foi exibido." })
        return await super.lblUserLogged.getAttribute('aria-label')
    }
}