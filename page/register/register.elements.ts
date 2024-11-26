export default class RegisterElements {

  /**
    * Mapping of the Register Name field element
    */
  get inpRegisterName() { return $("aria/Nome") }

  /**
   * Mapping of the Register Email field element
   */
  get inpRegisterEmail() { return $("aria/Email") }

  /**
   * Mapping of the Register Password field element
   */
  get inpRegisterPassword() { return $("aria/Senha") }

  /**
   * Mapping of the Confirm Register Password field element
   */
  get inpConfirmRegisterPassword() { return $("aria/Confirmar Senha") }

  /**
   * Mapping of the Registration Button element
   */
  get btnCreateRegister() { return $("//flt-semantics[contains(text(),'Não tem uma conta? Crie uma agora')]") }

  /**
  * Mapping of the Confirm a new Register Button 
  */
  get btnRegister() { return $(`//flt-semantics-container/flt-semantics[@role="button" and text()="Registrar"]`) }

  /**
   * Mapping of the logged-in user's name label
   */
  get lblUserLogged() { return $("flt-semantics[role='group']") }


}
