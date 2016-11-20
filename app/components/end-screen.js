import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['end-screen'],

    actions: {
        restartGame() {
            this.sendAction('restartGame');
        }
    }
});
