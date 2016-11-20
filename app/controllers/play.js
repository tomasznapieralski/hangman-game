import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['difficulty'],

    allKeyPressed: '',
    allGoodKeyPressed: '',
    allWrongKeyPressed: '',
    maxNumberOfWrongKeyPressed: 11,

    wordLength: 0,
    missingLetters: '',

    gameStatus: Ember.computed('numberOfMissingLetters', 'numberOfWrongKeyPressed', 'maxNumberOfWrongKeyPressed', function () {
        if (this.get('numberOfWrongKeyPressed') === this.get('maxNumberOfWrongKeyPressed')) {
            return 'lose';
        }

        if (this.get('numberOfMissingLetters') === 0) {
            return 'win';
        }

        return 'playing';
    }),

    numberOfMissingLetters: Ember.computed('missingLetters', function() {
        return this.get('missingLetters').length;
    }),

    numberOfWrongKeyPressed: Ember.computed('allWrongKeyPressed', function() {
        return this.get('allWrongKeyPressed').length;
    }),

    actions: {
        restartGame() {
            this.get('target').send('restartGame');
        }
    }
});
