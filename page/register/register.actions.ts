import { IUser } from "../../interfaces/login/IUser.interface"
import RegisterInteractions from "./register.interactions"

export default class RegisterActions extends RegisterInteractions {

    public async toRegister() {
        await this.clickBtnRegister()
    }

}