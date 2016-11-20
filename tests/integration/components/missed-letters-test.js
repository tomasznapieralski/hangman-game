import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('missed-letters', 'Integration | Component | missed letters', {
  integration: true
});

test('expected text is rendered', function(assert) {
  assert.expect(1);

  this.render(hbs`{{missed-letters letters='ABCDEF'}}`);
  assert.equal(this.$('.missed-letters').text().trim(), 
  `YOU MISSED:
ABCDEF`);
});
