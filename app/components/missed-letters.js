import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['missed-letters'],

    letters: '',
    isVisible: Ember.computed.notEmpty('letters')
});
