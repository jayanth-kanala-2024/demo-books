import { module, test } from 'qunit';
import { setupTest } from 'freshbooks/tests/helpers';

module('Unit | Route | books/edit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:books/edit');
    assert.ok(route);
  });
});
