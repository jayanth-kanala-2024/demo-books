import { module, test } from 'qunit';

import { setupTest } from 'freshbooks/tests/helpers';

module('Unit | Model | books/comments', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('books/comments', {});
    assert.ok(model);
  });
});
