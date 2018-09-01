import { $on, qs } from "../helper/helper.js";
import { dummyCardData } from "../template/dummyData.js";

class CardList {
  constructor({ cardListSelector, cardTemplate, ajax, url }) {
    Object.assign(this, { cardTemplate, ajax, url });
    this.cardListEl = qs(cardListSelector);
    this.init();
  }
  init() {
    this.ajax(this.url, this.getData.bind(this));
  }
  bindEvents() {
    $on(this.cardListEl, "click", e => this.handleCliked(e));
  }
  handleCliked({ target }) {
    console.log({ target });
  }
  getData(isSuccess, data) {
    if (isSuccess) this.render(JSON.parse(data));
  }
  render(data) {
    const renderData = Object.values(data);
    this.cardListEl.innerHTML = this.cardTemplate(Object.values(renderData));
  }
}

export default CardList;
