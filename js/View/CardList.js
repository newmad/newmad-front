import { $on, qs } from "../helper/helper.js";
import { dummyCardData } from "../template/dummyData.js";



class CardList {
  constructor({ cardListSelector,countSelector, cardTemplate, ajax, url}) {
    Object.assign(this, { cardTemplate, ajax, url });
    this.cardListEl = qs(cardListSelector);
    this.countsEl = qs(countSelector);
    this.init();
  }
  init() {
    this.ajax(this.url.place, this.getData.bind(this));
    this.bindEvents();
  }
  bindEvents() {
    $on(this.cardListEl, "click", e => this.handleCliked(e));
  }
  handleCliked({ target }) {
    const listItem = target.closest('li')
    const id = listItem.id;
    if(target.dataset.like ==='like') return this.handleLikeBtn(id)
    else window.open(`/detail.html?id=${id}`)
  }
  handleLikeBtn(id){
    this.ajax(`${this.url.like}?keyword=${id}`, this.updateLike.bind(this))
  }
  updateLike(isSuccess, data){
    const {id, like} = JSON.parse(data)
    const updatedBtn = qs(`#likeId-${id}`, this.cardListEl)
    updatedBtn.innerText = like;
  }
  getData(isSuccess, data) {
    if (isSuccess) this.render(JSON.parse(data));
  }
  render(data) {
    const renderData = Object.values(data);
    this.countsEl.innerText = renderData.length;
    this.cardListEl.innerHTML = this.cardTemplate(Object.values(renderData));
  }
}

export default CardList;
