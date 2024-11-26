import MenuInteractions from "./menu.interactions"

export default class MenuActions extends MenuInteractions {

    /**
      * Method to open the sports screen menu
      */
    public async openMenu() {
        await super.clickBtnMenu()
        await super.waitBtnSignOut()
    }
}