//const { baseURL } = require('../Configuration/config');
const { searchBoxXPath, productImageXPath, addToCartXPath, baseURL } = require('../Configuration/locators');

class CommonUtils {
    constructor(page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto(baseURL);
    }

    async searchProduct(productName) {
        await this.navigateToHomePage();
        await this.page.fill(searchBoxXPath, productName);
        await this.page.press(searchBoxXPath, 'Enter');
        await this.page.waitForSelector(searchBoxXPath);
    }

    async addToCart() {
        try {
            await this.page.waitForSelector(addToCartXPath);
            await this.page.press(addToCartXPath);
            console.log("Product added to cart");
        } catch (error) {
            console.error("Error adding product to cart:", error);
            throw error;
        }
    }
}

module.exports = CommonUtils;