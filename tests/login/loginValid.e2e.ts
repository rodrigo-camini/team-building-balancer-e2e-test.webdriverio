import { ct0001 } from "../../data/login/login.data"
import LoginActions from "../../page/login/login.actions"
import OnboardingActions from "../../page/onboarding/onboarding.actions"
import MenuActions from "../../page/sports/menu/menu.actions"
import MenuAssertions from "../../page/sports/menu/menu.assertions"

describe('Team Building Balancer', () => {

    // Arrange
    const loginActions = new LoginActions()
    const onboardingActions = new OnboardingActions()
    const menuActions = new MenuActions()
    const menuAssertions = new MenuAssertions()

    it('should login with valid credentials', async () => {
        // Act
        await onboardingActions.waitLoadingElementsFlutterWeb()
        await onboardingActions.skipOnBoardingAndGoLogin()
        await loginActions.toLogin(ct0001)
        await menuActions.openMenu()
        // Assert
        await menuAssertions.isTheLoggedUser(ct0001.userLogged)
    })
})

