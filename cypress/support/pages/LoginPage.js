import BasePage from './BasePage'

class LoginPage extends BasePage {

    populateLocators = {
        'Email': '#ctl00_MainContent_LoginControl1_TextBoxEmail',
        'Password': '#ctl00_MainContent_LoginControl1_TextBoxPassword',
    };

    actionLocators = {
        'Login': '#ctl00_MainContent_LoginControl1_ButtonLogin',
    };


}

export default new LoginPage()
