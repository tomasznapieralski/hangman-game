import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        const url = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

        return new Promise((resolve, reject) => {
            Ember.$.ajax(url, {
                success(data) {
                    data && data.word ? resolve(data.word.toUpperCase()) : reject('Unexpected error');
                },
                error(error) {
                    reject(error);
                }
            });
        });
    },

    onKeyPress(key) {
        const allKeyPressed = this.get('controller.allKeyPressed'),
            expectedWord = this.get('controller.model');

        if (allKeyPressed.includes(key)) {
            return;
        } else {
            this.set('controller.allKeyPressed', `${allKeyPressed}${key}`);
        }

        if (expectedWord.includes(key)) {
            this.set('controller.allGoodKeyPressed', `${this.get('controller.allGoodKeyPressed')}${key}`);
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
        }
    }
});
