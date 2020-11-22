class UIManager {
    static populate(locator, value, type){
        switch(type) {
            case 'textField':
                this.setTextField(locator, value);
                break;
            default:
                throw new Error('Unsupported Element!');
        }
    }

    static setTextField(locator, value){
        cy.get(locator).clear().type(value);
    }

    static click(locator){
        cy.get(locator).click();
    }
}

module.exports = UIManager;