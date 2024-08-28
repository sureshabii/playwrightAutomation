
const   CommonUtils   =require('../../commands/commands.js')
const { Utility } = require('../../utility.js');
const baseUrl = Utility.getBaseUrl();
const LoginPage ={
    loginPage: {
        email: "#outlined-basic1",
        password: "#outlined-basic2",
        loginBtn: "//button[@type='submit']",
    },

    async loginMethod(page,email,password)
    {
        await CommonUtils.goto(page,baseUrl);
        await CommonUtils.getFill(page,this.loginPage.email,email);
        await CommonUtils.getFill(page,this.loginPage.password,password);
        await CommonUtils.getClick(page,this.loginPage.loginBtn);
    }
}
module.exports=LoginPage