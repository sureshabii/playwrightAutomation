class Utility {
    static getBaseUrl() {
        // Use Node.js process.env to get environment variables in Playwright
        const envi = process.env.SERVER_ENV;
        console.log("envi", envi);
        if (envi === 'stage') {
            return "https://stage.pharmanlp.com/";
        }
        else if (envi === 'uat') {
            return "https://stage.pharmanlp.com/";
        }
         else {
            return "https://stage.pharmanlp.com/#/"; // default to canary for stability
        }
    }
}

module.exports = { Utility };
