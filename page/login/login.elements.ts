export default class LoginElements {

    /**
     * Mapping of the email field element
     */
    get inpEmail() { return $("aria/Email") }

    /**
     * Mapping of the password field element
     */
    get inpPassword() { return $("aria/Password") }

    /**
     * Mapping of the login button element
     */
    get btnEnter() { return $(`flt-semantics-container > flt-semantics[role="button"]:nth-child(3)`) }

}
