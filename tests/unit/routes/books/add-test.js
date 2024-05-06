import { module, test } from 'qunit';
import { setupTest } from 'freshbooks/tests/helpers';

module('Unit | Route | books/add', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:books/add');
    assert.ok(route);
  });
});
