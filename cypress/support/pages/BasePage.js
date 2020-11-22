const UIManager = require('../utility/UIManager');
const ValidationManager = require('../utility/ValidationManager');

export default class BasePage {

    actionLocators = {};
    populateLocators = {};
    fieldLocators = {};

    constructor() {
    }

    open(home) {
        cy.visit(home);
    }

    execute(buttonLabel) {
        UIManager.click(this.actionLocators[buttonLabel])
    }

    populate(dictionaryData) {
        for (const [label, elementData] of Object.entries(dictionaryData)) {
            UIManager.populate(this.populateLocators[label], elementData['Value'], elementData['Type']);
        }
    }

    validate(fieldLabel, expectedValue, elementType) {
        ValidationManager.validate(this.fieldLocators[fieldLabel], expectedValue, elementType)
    }
}
