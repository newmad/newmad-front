import { $on, qs } from "../helper/helper.js";
import { dummyCardData } from "../template/dummyData.js";

class CardList {
  constructor({ cardListSelector, cardTemplate }) {
    this.cardListEl = qs(cardListSelector);
    this.cardTemplate = cardTemplate;
    this.init();
  }
  init() {
    this.render();
  }
  render() {
    this.cardListEl.innerHTML = this.cardTemplate(dummyCardData);
  }
}

export default CardList;
