class ValidationManager {
    static validate(locator, expectedValue, type){
        switch(type) {
            case 'text':
                this.compareTextValue(locator, expectedValue);
                break;
            default:
                throw new Error('Unsupported Element!');
        }
    }

    static compareTextValue(locator, expectedValue){
        cy.get(locator).should('have.text', expectedValue);
    }
}

module.exports = ValidationManager;