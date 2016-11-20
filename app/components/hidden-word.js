import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['hidden-word'],

    uncoveredLetters: '',
    word: '',
    letters: [],

    didInsertElement() {
        this._super(...arguments);

        const letters = [];

        for (let letter of this.get('word')) {
            letters.push({
                letter,
                isHidden: true
            })
        }

        this.set('letters', letters);
    }
});
