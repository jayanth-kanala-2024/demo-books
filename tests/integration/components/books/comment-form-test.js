import { module, test } from 'qunit';
import { setupRenderingTest } from 'freshbooks/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | books/review-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Books::ReviewForm />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Books::ReviewForm>
        template block text
      </Books::ReviewForm>
    `);

    assert.dom().hasText('template block text');
  });
});
