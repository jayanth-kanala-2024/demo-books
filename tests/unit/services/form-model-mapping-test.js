import { module, test } from 'qunit';
import { setupTest } from 'freshbooks/tests/helpers';

module('Unit | Service | form-model-mapping', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:form-model-mapping');
    assert.ok(service);
  });
});
