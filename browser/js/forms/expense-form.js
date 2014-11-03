var AmpersandFormView, InputView, ExpenseForm;

AmpersandFormView = require('ampersand-form-view');

InputView = require('../views/input-view');

ExpenseForm = AmpersandFormView.extend({
    fields: function () {
        return [
            new InputView({
                label: 'Date',
                name: 'date',
                type: 'date',
                requiredMessage: 'Please enter the date you incurred this expense.',
                value: this.model && this.model.date || '',
                size: 'large',
                parent: this
            }),
            new InputView({
                label: 'Time',
                name: 'time',
                type: 'time',
                requiredMessage: 'Please enter the time at which you incurred this expense.',
                value: this.model && this.model.time || '',
                size: 'large',
                parent: this
            }),
            new InputView({
                label: 'Amount',
                name: 'amount',
                type: 'number',
                placeholder: 'e.g., 32.50',
                requiredMessage: 'Please enter the amount of the expense.',
                value: this.model && this.model.amount || '',
                size: 'large',
                parent: this
            }),
            new InputView({
                label: 'Description',
                name: 'description',
                placeholder: 'e.g., Plane ticket to Tokyo',
                requiredMessage: 'Describe the nature of the expense.',
                value: this.model && this.model.description || '',
                size: 'large',
                parent: this
            }),
            new InputView({
                label: 'Comments',
                name: 'comments',
                type: 'textarea',
                placeholder: 'e.g., This was a particularly expensive trip because it was high season and all there was left was first class...',
                value: this.model && this.model.comment || '',
                required: false,
                size: 'large',
                isTextArea: true,
                parent: this
            })
        ];
    }
});

module.exports = ExpenseForm;
