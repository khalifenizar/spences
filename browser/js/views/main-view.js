var AmpersandView, router, head, body, MainView;

AmpersandView = require('ampersand-view');

router = require('../router');
head = require('../../templates/head.dom');
body = require('../../templates/body.dom');

MainView = AmpersandView.extend({
    template: body,

    initialize: function () {
        this.listenTo(router, 'page', this.switchPageView);
    },

    switchPageView: function (pageView) {
        pageView.render();

        this
            .queryByHook('page-container')
            .appendChild(pageView.el)
        ;
    },

    render: function () {
        document.head.appendChild(head());

        this.renderWithTemplate(this);
        return this;
    }
});

module.exports = MainView;
