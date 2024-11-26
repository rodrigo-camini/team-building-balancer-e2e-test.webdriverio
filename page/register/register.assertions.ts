import RegisterInteractions from "./register.interactions"

export default class RegisterAssertions extends RegisterInteractions {

    /**
     * Method to open the menu on the sports screen
     */
    public async isTheUserCreated(userCreated: string) {
        expect(await super.getTextLblNewUser()).toBe(userCreated)
    }
}