import BasePage from './BasePage'

class HomePage extends BasePage {

    actionLocators = {
        'Login': '.HPHeaderLogin > a > img',
        'Sign Up Free': '.HPHeaderSignup > a > img',
    };

    fieldLocators = {
        'Error Message': '#ErrorMessageText',
    };

}

export default new HomePage()
