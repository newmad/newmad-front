import { $on, qs } from "../helper/helper.js";
import { dummyCardData } from "../template/dummyData.js";

class CardList {
  constructor({ cardListSelector, cardTemplate, ajax, placeUrl }) {
    Object.assign(this, { cardTemplate, ajax, placeUrl });
    this.cardListEl = qs(cardListSelector);
    this.init();
  }
  init() {
    this.ajax(this.placeUrl, this.getData.bind(this));
    this.bindEvents();
  }
  bindEvents() {
    $on(this.cardListEl, "click", e => this.handleCliked(e));
  }
  handleCliked({ target }) {
    const listItem = target.closest('li')
    const weatherID = listItem.id;
    if(target.id ==='like-btn') return this.handleLikeBtn(weatherID)
    window.open(`/detail.html?id=${weatherID}`)
  }
  handleLikeBtn(id){
    
  }
  getData(isSuccess, data) {
    if (isSuccess) this.render(JSON.parse(data));
  }
  render(data) {
    const renderData = Object.values(data);
    console.dir(renderData);
    this.cardListEl.innerHTML = this.cardTemplate(Object.values(renderData));
  }
}

export default CardList;
