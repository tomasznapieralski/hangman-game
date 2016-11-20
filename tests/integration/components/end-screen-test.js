import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('end-screen', 'Integration | Component | end screen', {
  integration: true
});

test('Text changes depending on gameStatus property', function(assert) {
  assert.expect(2);

  this.render(hbs`{{end-screen gameStatus='win'}}`);
  assert.equal(this.$('.end-screen__title').text().trim(), 'Congratulations, You Win!');

  this.render(hbs`{{end-screen gameStatus='lose'}}`);
  assert.equal(this.$('.end-screen__title').text().trim(), 'Game Over');
});
