import { module, test } from 'qunit';
import { setupRenderingTest } from 'freshbooks/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | auth/login', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Auth::Login />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Auth::Login>
        template block text
      </Auth::Login>
    `);

    assert.dom().hasText('template block text');
  });
});
