import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['hidden-word'],

    numberOfSlots: 11,
    uncoveredLetters: '',
    word: '',
    letters: Ember.computed('word', 'numberOfSlots', function () {
        const word = this.get('word'),
            numberOfEmptySlots = this.get('numberOfSlots') - word.length,
            letters = [];

        for (let i = 0; i < numberOfEmptySlots; ++i) {
            letters.push({
                isDisabled: true
            });
        }

        for (let letter of word) {
            letters.push({
                letter,
                isVisible: letter === '-' ? true : false
            });
        }

        return letters;
    }),

    didUpdateAttrs() {
        this._super(...arguments);

        const uncoveredLetters = this.get('uncoveredLetters');
        
        this.get('letters').forEach((letter, index) => {
            if (!letter.isVisible && uncoveredLetters.includes(letter.letter)) {
                this.set(`letters.${index}.isVisible`, true);
            }
        });
    }
});
