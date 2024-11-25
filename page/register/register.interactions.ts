import ClickCustomCommands from "../../utils/customCommands/clickCustomCommands";
import SetCustomCommands from "../../utils/customCommands/setCustomCommands";
import KeyHelpers from "../../utils/helpers/keys.helpers";
import RegisterElements from "./register.elements";

const clickCustomCommands = new ClickCustomCommands()
const setCustomCommands = new SetCustomCommands()
const keyHelpers = new KeyHelpers()

export default class RegisterInteractions extends RegisterElements {

    // /**
    //  * Método para inserir valor no campo de e-mail do login
    //  * @param email 
    //  */
    // protected async setInpEmail(email: string) {
    //     await clickCustomCommands.waitForDisplayedElementAndClick(await super.inpEmail, 'E-mail')
    //     await this.inpEmail.addValue(email)
    // }

    // protected async setInpPassword(password: string) {
    //     await keyHelpers.tab()
    //     await setCustomCommands.waitForDisplayedElementAndAddValue(await super.inpPassword, password, 'Senha')
    // }

    protected async clickBtnRegister() {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.btnRegister, 'Não tem uma conta? Crie uma agora')
    }

}