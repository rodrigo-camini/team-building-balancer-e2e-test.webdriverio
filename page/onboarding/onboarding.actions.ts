import ActionsHelpers from "../../utils/helpers/actions.helpers"
import OnboardingInteractions from "./onboarding.interactions"

const elementFlutterWeb = "flt-semantics-placeholder[role='button']"
const actionsHelpers = new ActionsHelpers()

export default class OnboardingActions extends OnboardingInteractions {

    /**
     * Method to open the Team Building Balancer website
     */
    protected async openOnboarding() {
        await browser.url(`https://team-building-balancer.web.app`)
    }

    /**
      * Method to display the Flutter web HTML elements on the screen for interaction with the test framework
      */
    public async waitLoadingElementsFlutterWeb() {
        await this.openOnboarding()
        await super.waitForFlutterWeb()
        await actionsHelpers.showHiddenElementsFlutter(elementFlutterWeb)
    }

    /**
     * Method to skip the onboarding screen
     */
    public async skipOnBoarding() {
        await super.clickBtnSkipOnBoarding()
    }

    /**
     * Method to skip the onboarding and go to the login screen
     */
    public async skipOnBoardingAndGoLogin() {
        await this.skipOnBoarding()
        await super.clickBtnCreateNewSuperAccount()
    }
}
