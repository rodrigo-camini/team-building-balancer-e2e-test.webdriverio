export default class OnboardingElements {

    /**
     * Mapping of the [Skip OnBoarding] button
     */
    get btnSkipOnBoarding() { return $("//flt-semantics[contains(text(),'Pular OnBoarding')]") }

    /**
     * Mapping of the [Create a Super Account] button
     */
    get btnCreateNewSuperAccount() { return $("//flt-semantics[contains(text(),'Criar Uma Super Conta')]") }

    get flutterWeb() { return $("flt-semantics-placeholder[role='button']") }

}
