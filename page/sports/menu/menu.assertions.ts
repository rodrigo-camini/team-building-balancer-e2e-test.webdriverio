import MenuInteractions from "./menu.interactions"

export default class MenuAssertions extends MenuInteractions {

    /**
     * Method to open the menu on the sports screen
     */
    public async isTheLoggedUser(userLoggedIn: string) {
        expect(await super.getTextLblUserLogged()).toBe(userLoggedIn)
    }
}