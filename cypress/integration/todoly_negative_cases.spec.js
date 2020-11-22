import HomePage from '../support/pages/HomePage'
import LoginPage from '../support/pages/LoginPage'
import 'chai/register-expect';

describe('Negative Case to login on todo.ly with invalid credentials', function() {

    // this information can be loaded from json file
    const jsonData = '{' +
        '"Email": {"Value": "invalid@email.com", "Type": "textField"},' +
        '"Password": {"Value": "Password123", "Type": "textField"}' +
        '}';

    const json = JSON.parse(jsonData);

    it('Negative Cases - Login with invalid credentials', function () {
        HomePage.open('http://todo.ly');
        HomePage.execute("Login");
        LoginPage.populate(json);
        LoginPage.execute('Login');
        HomePage.validate('Error Message', 'Wrong email or password. Please try again. Forgot your password? You can retrieve it using the form below.', 'text')
    })
});
