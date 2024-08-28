// support/commands/commands.js
const { expect } = require('@playwright/test');
const CommonUtils= {

// Navigate to the page
async goto(page, url) {
    await page.goto(url);
},

// Refresh the page
async pageReload(page) {
    await page.reload();
},

 // Click on the field to focus it
async getClick(page,element)
{
    await page.locator(element).click();
},

// Type new text into the input field
async getType(page,element,text)
{
    await page.locator(element).type(text);
},

// Clear and type into an input field
async getFill(page,element,text)
{
    await page.fill(element,text);
},

// Verify the title
async getTitle(page,expected)
{
    const actual=await page.title();
    expect(actual).toBe(expected);
},

// Select the option with value 'optionValue'
async getSelectByOption(page,element,option)
{
    await page.selectOption(element,option);
},

// Locate the file input and upload a file
async getFileUpload(page,element,file)
{
    await page.locator(element).setInputFiles(file);
},

// Press a key (e.g., Enter)
async getKeyboardPress(page,keyToPress)
{
    await page.keyboard.press(keyToPress)
},

// Wait for a specific element to appear
async waitForSelector(page,element)
{
    await page.waitForSelector(element);
},

// Get the text content of the element
async getTextContent(page,element)
{
    await page.locator(element).textContent();
},

// Listen for the 'Alert' event
async alertHandle(page)
{
    await page.on('dialog', async dialog => {
    console.log(dialog.message()); // Print the alert message
    if (dialog.type() === 'alert') {
        await dialog.accept();
    } else if (dialog.type() === 'confirm') {
        await dialog.accept(); // or dialog.dismiss() to reject
    } else if (dialog.type() === 'prompt') {
        await dialog.accept('Input provided by automation'); // or dialog.dismiss() to reject
    }
    })
},

//Switch to the Iframe
async getIframeBody(page,element)
{
    const iframe= await page.frameLocator(element);
    return iframe;
},



}
module.exports =  CommonUtils ;