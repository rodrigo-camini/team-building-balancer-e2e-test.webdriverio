import { IRegister } from "../../interfaces/Register/IRegister.interface"
import RegisterInteractions from "./register.interactions"

export default class RegisterActions extends RegisterInteractions {

    /**
    * Method to perform login on the team-building-balancer website
    * @param newUser 
    */
    public async toRegister(newUser: IRegister) {
        await super.clickBtnCreateRegister()
        await super.setInpRegisterName(newUser.name)
        await super.setInpRegisterEmail(newUser.email)
        await super.setInpRegisterPassword(newUser.password)
        await super.setInpregisterPasswordConfirm(newUser.confirmPassword)
        await super.clickBtnRegister()
    }

}