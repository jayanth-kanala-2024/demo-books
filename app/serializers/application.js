import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  keyForAttribute(attr) {
    return attr;
  }

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    this.normalizePayload(payload);
    return payload;
  }

  normalizePayload(payload) {
    let temp = [];
    if (!Array.isArray(payload.data)) {
      temp.data = [payload.data];
    } else {
      temp.data = payload.data;
    }
    temp.data.forEach((item) => {
      this.format(item);
    });
  }

  format(item) {
    this.formatDate(item);
  }

  formatDate(item) {
    if (item?.attributes.created_at) {
      item.attributes.created_at_formatted = this.getFormattedDate(
        item.attributes.created_at,
      );
    }
    if (item?.attributes.updated_at) {
      item.attributes.updated_at_formatted = this.getFormattedDate(
        item.attributes.updated_at,
      );
    }
  }

  getFormattedDate(date) {
    let locale = localStorage.getItem('locale');
    return new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(
      new Date(date),
    );
  }
}
