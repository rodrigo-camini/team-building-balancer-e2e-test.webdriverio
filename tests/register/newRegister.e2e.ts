// import { ct0001 } from "../../data/login/login.data"
import OnboardingActions from "../../page/onboarding/onboarding.actions"
import RegisterActions from "../../page/register/register.actions"
import MenuActions from "../../page/sports/menu/menu.actions"
import MenuQuestions from "../../page/sports/menu/menu.questions"

describe('Team Building Balancer', () => {

    // Arrange
    const registerActions = new RegisterActions()
    const onboardingActions = new OnboardingActions()
    const menuActions = new MenuActions()
    // const menuQuestions = new MenuQuestions()


    it('should register a new user', async () => {
        // Act
        await onboardingActions.waitLoadingElementsFlutterWeb()
        await onboardingActions.skipOnBoardingAndGoLogin()
        await registerActions.toRegister()
        // await menuActions.openMenu()
        // await registerActions.toRegister()

        // Assert
        // await menuQuestions.isTheLoggedUser(ct0001.userLogged)
    })
})

