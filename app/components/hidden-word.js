import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['hidden-word'],

    uncoveredLetters: '',
    word: '',
    letters: [],

    init() {
        this._super(...arguments);

        const letters = [];

        for (let letter of this.get('word')) {
            letters.push({
                letter,
                isHidden: true
            })
        }

        this.set('letters', letters);
    },

    didUpdateAttrs() {
        this._super(...arguments);

        const uncoveredLetters = this.get('uncoveredLetters');
        
        this.get('letters').forEach((letter, index) => {
            if (letter.isHidden && uncoveredLetters.includes(letter.letter)) {
                this.set(`letters.${index}.isHidden`, false);
            }
        });
    }
});
