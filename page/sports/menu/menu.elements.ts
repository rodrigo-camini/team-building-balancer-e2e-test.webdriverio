export default class MenuElements {

    /**
     * Mapping of the page's menu button
     */
    get btnMenu() { return $("=Abrir menu de navegação") }

    /**
     * Mapping of the logged-in user's name label
     */
    get lblUserLogged() { return $("flt-semantics[role='group']") }

    /**
     * Mapping of the [Sign Out] button
     */
    get btnSignOut() { return $("=Sign Out") }

}