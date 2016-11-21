import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:play', 'Unit | Controller | play', {});

test('check computed properties', function(assert) {
  let controller = this.subject({
      allKeyPressed: '',
      allGoodKeyPressed: '',
      allWrongKeyPressed: 'ADCGF',
      maxNumberOfWrongKeyPressed: 11,
      wordLength: 4,
      missingLetters: 'test'
  });

  assert.equal(controller.get('numberOfWrongKeyPressed'), 5);
  assert.equal(controller.get('numberOfMissingLetters'), 4);
  assert.equal(controller.get('gameStatus'), 'playing');

  controller.set('missingLetters', '');
  assert.equal(controller.get('numberOfMissingLetters'), 0);
  assert.equal(controller.get('gameStatus'), 'win');

  controller.set('allWrongKeyPressed', 'ASQSOISLDVH');
  assert.equal(controller.get('numberOfWrongKeyPressed'), 11);
  assert.equal(controller.get('gameStatus'), 'lose');
});
