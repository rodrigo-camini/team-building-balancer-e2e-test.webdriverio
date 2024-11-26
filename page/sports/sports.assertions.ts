import SportInteractions from "./sports.interactions"

const heading = 'Balanceador de Times'

export default class SportAssertions extends SportInteractions {

    /**
     * Method to validate the title of the Sports page
     * @param title - Page title
     */
    public async isTheTitleEqual(title: string) {
        await super.waitForSportPage()
        expect(await super.getTextLblHeading()).toBe(title)
    }
}