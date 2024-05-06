import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ManageComponent extends Component {
  @service store;
  @service router;
  @action
  async archive(model) {
    const modelName = model.constructor.modelName;
    let record = this.store.peekRecord(modelName, model.id);
    await record.destroyRecord();
    this.router.refresh();
  }
}
