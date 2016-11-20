import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('folk-body', 'Integration | Component | folk body', {
  integration: true
});

test('folk parts are controlled by numberOfElementsToShow property', function(assert) {
  assert.expect(22);

  this.render(hbs`{{folk-body numberOfElementsToShow=0}}`);
  assert.equal(this.$('#neck').attr('class').trim(), 'folk-body__display-none');
  assert.equal(this.$('#corpus_Obraz').attr('class').trim(), 'folk-body__display-none');
  assert.equal(this.$('#right_hand').attr('class').trim(), 'folk-body__display-none');
  assert.equal(this.$('#left_hnd').attr('class').trim(), 'folk-body__display-none');
  assert.equal(this.$('#right_foot').attr('class').trim(), 'folk-body__display-none');
  assert.equal(this.$('#left_foot').attr('class').trim(), 'folk-body__display-none');
  assert.equal(this.$('#right_leg').attr('class').trim(), 'folk-body__display-none');
  assert.equal(this.$('#right_arm').attr('class').trim(), 'folk-body__display-none');
  assert.equal(this.$('#left_arm').attr('class').trim(), 'folk-body__display-none');
  assert.equal(this.$('#left_leg').attr('class').trim(), 'folk-body__display-none');
  assert.equal(this.$('#head_Obraz').attr('class').trim(), 'folk-body__display-none');

  this.render(hbs`{{folk-body numberOfElementsToShow=11}}`);
  assert.equal(this.$('#neck').attr('class').trim(), '');
  assert.equal(this.$('#corpus_Obraz').attr('class').trim(), '');
  assert.equal(this.$('#right_hand').attr('class').trim(), '');
  assert.equal(this.$('#left_hnd').attr('class').trim(), '');
  assert.equal(this.$('#right_foot').attr('class').trim(), '');
  assert.equal(this.$('#left_foot').attr('class').trim(), '');
  assert.equal(this.$('#right_leg').attr('class').trim(), '');
  assert.equal(this.$('#right_arm').attr('class').trim(), '');
  assert.equal(this.$('#left_arm').attr('class').trim(), '');
  assert.equal(this.$('#left_leg').attr('class').trim(), '');
  assert.equal(this.$('#head_Obraz').attr('class').trim(), '');
});
