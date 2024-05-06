import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { debounce } from '@ember/runloop';

export default class SearchComponent extends Component {
  @tracked results;
  @service api;
  @service router;
  @service store;
  @tracked q;

  SEARCH_URL = 'http://localhost:3000/search';

  @action
  async search(e) {
    debounce(this, this._search, e.target.value, 300); // 300 milliseconds debounce
  }
  async _search(q) {
    if (!q) {
      this.reset();
      return;
    }
    const data = await this.api.get(this.SEARCH_URL + `?q=${q}`);
    if (data.data) {
      this.results = data.data;
      await this.store.unloadAll(this.args.model);
      data.data.forEach((record) => {
        this.store.createRecord(this.args.model, record.attributes);
      });
    }
  }

  @action
  async reset() {
    await this.store.unloadAll(this.args.model);
    this.router.refresh();
  }
}
