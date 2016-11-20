import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('game-menu', 'Integration | Component | game menu', {
  integration: true
});

test('correct text is rendered', function(assert) {
  assert.expect(1);

  this.render(hbs`{{game-menu}}`);
  assert.equal(this.$('.game-menu').text().trim(), 
  `Welcome toThe Hangman Game
Select game difficulty:
    
        easy
    
    
        medium
    
    
        hard`);
});
