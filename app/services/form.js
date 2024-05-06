import Service from '@ember/service';
import { service } from '@ember/service';

export default class FormService extends Service {
  @service store;
  formDataToObject(formData) {
    const plainObject = {};
    for (let [key, value] of formData.entries()) {
      // Check if the key already exists
      if (plainObject.hasOwnProperty(key)) {
        // If the key already exists, convert its value to an array
        if (!Array.isArray(plainObject[key])) {
          plainObject[key] = [plainObject[key]];
        }
        plainObject[key].push(value);
      } else {
        plainObject[key] = value;
      }
    }
    return plainObject;
  }

  updateModel(model, formData) {
    model.eachAttribute((key) => {
      if (formData[key]) {
        model[key] = formData[key];
      }
    });
    return model;
  }

  async getRequestModalData(model, data) {
    if (data.id) {
      const book = await this.store.findRecord(model, data.id);
      return this.updateModel(book, data);
    } else {
      return this.store.createRecord(model, data);
    }
  }
}
