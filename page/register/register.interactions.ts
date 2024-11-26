import ClickCustomCommands from "../../utils/customCommands/clickCustomCommands";
import SetCustomCommands from "../../utils/customCommands/setCustomCommands";
import KeyHelpers from "../../utils/helpers/keys.helpers";
import RegisterElements from "./register.elements";

const clickCustomCommands = new ClickCustomCommands()
const setCustomCommands = new SetCustomCommands()
const keyHelpers = new KeyHelpers()

export default class RegisterInteractions extends RegisterElements {

    // /**
    //  * Method to insert a value into the Name field on the registration screen
    //  * @param registerName
    //  */
    protected async setInpRegisterName(registerName: string) {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.inpRegisterName, 'Name')
        await this.inpRegisterName.addValue(registerName)
    }

    // /**
    //  * Method to insert a value into the Email field on the registration screen
    //  * @param registerEmail 
    //  */
    protected async setInpRegisterEmail(registerEmail: string) {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.inpRegisterEmail, 'Email')
        await this.inpRegisterEmail.addValue(registerEmail)
    }

    // /**
    //  * Method to insert a value into the Password field on the registration screen
    //  * @param registerPassword 
    //  */
    protected async setInpRegisterPassword(registerPassword: string) {
        await keyHelpers.tab()
        await setCustomCommands.waitForDisplayedElementAndAddValue(await super.inpRegisterPassword, registerPassword, 'Senha')
        await keyHelpers.tab()
    }

    // /**
    //  * Method to insert a value into the Password confirmation field on the registration screen
    //  * @param registerPasswordConfirm 
    //  */
    protected async setInpregisterPasswordConfirm(registerPasswordConfirm: string) {
        await keyHelpers.tab()
        await setCustomCommands.waitForDisplayedElementAndAddValue(await super.inpConfirmRegisterPassword, registerPasswordConfirm, 'Confirmar Senha')
    }

    protected async clickBtnCreateRegister() {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.btnCreateRegister, 'Não tem uma conta? Crie uma agora')
    }

    protected async clickBtnRegister() {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.btnRegister, 'Registrar')
    }

    /**
    * Method to return the user created.
    * @returns 
    */
    protected async getTextLblNewUser() {
        await super.lblUserLogged.waitForDisplayed({ timeoutMsg: "O menu com nome do usuário logado não foi exibido." })
        return await super.lblUserLogged.getAttribute('aria-label')
    }

}