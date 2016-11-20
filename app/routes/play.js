import Ember from 'ember';

export default Ember.Route.extend({
    wordnik: Ember.inject.service(),

    model(params) {
        return this.get('wordnik').getRandomWord(params.difficulty);
    },

    setupController(controller, model) {
        this._super(...arguments);

        controller.setProperties({
            allKeyPressed: '',
            allGoodKeyPressed: '',
            allWrongKeyPressed: '',
            maxNumberOfWrongKeyPressed: 11,
            wordLength: model.length,
            missingLetters: model.split('-').join('')
        });
    },

    onKeyPress(key) {
        const allKeyPressed = this.get('controller.allKeyPressed'),
            expectedWord = this.get('controller.model'),
            gameStatus = this.get('controller.gameStatus');

        if (gameStatus !== 'playing' || allKeyPressed.includes(key)) {
            return;
        } else {
            this.set('controller.allKeyPressed', `${allKeyPressed}${key}`);
        }

        if (expectedWord.includes(key)) {
            this.set('controller.allGoodKeyPressed', `${this.get('controller.allGoodKeyPressed')}${key}`);
            this.set('controller.missingLetters', this.get('controller.missingLetters').split(key).join(''));
        } else {
            this.set('controller.allWrongKeyPressed', `${this.get('controller.allWrongKeyPressed')}${key}`);
        }
    },

    actions: {
        didTransition() {
            Ember.run.schedule('afterRender', this, () => {
                Ember.$(document).keypress((event) => {
                    if ((event.which >= 65 && event.which <= 90) || (event.which >= 97 && event.which <= 122)) {
                        this.onKeyPress(event.key.toUpperCase());
                    }
                });
            });
        },

        restartGame() {
            this.refresh();
            console.log('click');
        },
    }
});
