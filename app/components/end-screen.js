import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['end-screen'],

    gameStatus: '',
    
    isVisible: Ember.computed('gameStatus', function () {
        return this.get('gameStatus') !== 'playing' ? true : false;
    }),

    message: Ember.computed('gameStatus', function () {
        return this.get('gameStatus') === 'win' ? 'Congratulations, You Win!' : 'Game Over';
    }),

    actions: {
        restartGame() {
            this.sendAction('restartGame');
        }
    }
});
