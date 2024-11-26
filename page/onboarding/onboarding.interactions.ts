import ClickCustomCommands from "../../utils/customCommands/clickCustomCommands"
import OnboardingElements from "./onboarding.elements"

const clickCustomCommands = new ClickCustomCommands()

export default class OnboardingInteractions extends OnboardingElements {

    /**
     * Method to click the [Skip OnBoarding] button
     */
    protected async clickBtnSkipOnBoarding() {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.btnSkipOnBoarding, "Pular OnBoarding")
    }

    protected async clickBtnCreateNewSuperAccount() {
        await clickCustomCommands.waitForDisplayedElementAndClick(await super.btnCreateNewSuperAccount, 'Criar uma super conta')
    }

    /**
     * Method to wait for the flutter web element to exist in the HTML and then wait for it to be displayed on the screen.
     */
    protected async waitForFlutterWeb() {
        await this.flutterWeb.waitForExist()
        await this.flutterWeb.waitForDisplayed()
    }
}
