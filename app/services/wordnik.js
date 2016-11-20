import Ember from 'ember';

export default Ember.Service.extend({
    url: 'http://api.wordnik.com:80/v4/words.json/randomWord',
    settings: {
        hasDictionaryDef: true,
        minCorpusCount: 0,
        maxCorpusCount: -1,
        minDictionaryCount: 1,
        maxDictionaryCount: -1,
        minLength: 3,
        maxLength: 11,
        api_key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
    },

    getRandomWord(difficulty) {
        const url = this.get('url'),
            settings = this.get('settings');

        switch (difficulty) {
            case 'easy':
                settings.minLength = 3;
                settings.maxLength = 5;
                break;
            default:
            case 'medium':
                settings.minLength = 6;
                settings.maxLength = 8;
                break;
            case 'hard':
                settings.minLength = 9;
                settings.maxLength = 11;
                break;
        }

        return new Promise((resolve, reject) => {
            Ember.$.ajax(url, {
                data: settings,
                method: 'GET',
                success(data) {
                    if (data && data.word) {
                        resolve(data.word.toUpperCase());
                    } else {
                        reject('Unexpected error');
                    }
                },
                error(error) {
                    reject(error);
                }
            });
        });
    },
});
