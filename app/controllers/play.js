import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['difficulty'],

    allKeyPressed: '',
    allGoodKeyPressed: '',
    allWrongKeyPressed: '',
    maxNumberOfWrongKeyPressed: 11,

    wordLength: 0,
    missingLetters: '',

    numberOfWrongKeyPressed: Ember.computed('allWrongKeyPressed', function() {
        return this.get('allWrongKeyPressed').length;
    })
});
