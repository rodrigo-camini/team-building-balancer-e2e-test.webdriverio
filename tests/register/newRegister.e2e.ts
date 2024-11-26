import { generateFakerUser } from "../../data/register/register.data"
import OnboardingActions from "../../page/onboarding/onboarding.actions"
import RegisterActions from "../../page/register/register.actions"
import MenuActions from "../../page/sports/menu/menu.actions"
import MenuAssertions from "../../page/sports/menu/menu.assertions"

describe('Team Building Balancer', () => {

    // Arrange
    const registerActions = new RegisterActions()
    const onboardingActions = new OnboardingActions()
    const menuActions = new MenuActions()
    const menuAssertions = new MenuAssertions()


    it('should register a new user', async () => {
        const user = generateFakerUser();

        // Act
        await onboardingActions.waitLoadingElementsFlutterWeb()
        await onboardingActions.skipOnBoardingAndGoLogin()
        await registerActions.toRegister(user)
        await menuActions.openMenu()
        // Assert
        await menuAssertions.isTheLoggedUser(user.createdUserText)
    })
})

