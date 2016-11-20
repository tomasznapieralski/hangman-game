import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hidden-word', 'Integration | Component | hidden word', {
  integration: true
});

test('correct classes are set', function(assert) {
  assert.expect(2);

  this.render(hbs`{{hidden-word uncoveredLetters='' word='test'}}`);
  assert.equal(this.$('.hidden-word__slot-disabled').length, 7);
  assert.equal(this.$('.hidden-word__letter').length, 11);
});
