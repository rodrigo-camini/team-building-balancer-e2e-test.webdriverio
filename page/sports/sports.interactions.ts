import SportElements from "./sports.elements"

const heading = 'Balanceador de Times'

export default class SportInteractions extends SportElements {

    /**
     * Method to wait for the sports page to load
     */
    public async waitForSportPage() {
        let element = super.lblHeading
        await browser.waitUntil(async function () {
            return await element.getText() === heading
        }, {
            timeout: 10000,
            interval: 500,
            timeoutMsg: 'expected text to be different after 10s'
        })
    }

    /**
     * Method to return the value of the sports page title
     * @returns 
     */
    public async getTextLblHeading() {
        await this.lblHeading.waitForDisplayed({ timeoutMsg: "O título da pagina de sports não foi exibido" })
        return await this.lblHeading.getText()
    }
}