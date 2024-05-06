import { module, test } from 'qunit';
import { setupRenderingTest } from 'freshbooks/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | books/add', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Books::Add />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Books::Add>
        template block text
      </Books::Add>
    `);

    assert.dom().hasText('template block text');
  });
});
