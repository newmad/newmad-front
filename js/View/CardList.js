import { $on, qs } from "../helper/helper.js";
import animations  from '../helper/animation.js';


class CardList {
  constructor({ cardListSelector,countSelector, cardTemplate, ajax, url}) {
    Object.assign(this, { cardTemplate, ajax, url });
    this.cardListEl = qs(cardListSelector);
    this.countsEl = qs(countSelector);
    this.rollBackBtn = null;
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
    const updatedBtn = qs(`#likeId-${id}`, this.cardListEl)
    if(target.dataset.like ==='like') return this.handleLikeBtn(id, updatedBtn)
    else window.open(`/detail.html?id=${id}`)
  }
  handleLikeBtn(id, updatedBtn){
    this.updatedBtnTxt(updatedBtn)
    this.ajax(`${this.url.like}?keyword=${id}`, this.updateLike.bind(this))
  }
  updatedBtnTxt(updatedBtn){
    const likeCounts = Number(updatedBtn.dataset.counts)+1
    updatedBtn.innerText = likeCounts;
    updatedBtn.dataset.counts = likeCounts;
    this.rollBackBtn = updatedBtn
  }
  updateLike(isSuccess, data){
    if(!isSuccess) this.rollBackBtnTxt()
    this.rollBackBtn = null;
  }
  rollBackBtnTxt(){
    this.rollBackBtn.innerText =  Number(updatedBtn.dataset.counts)-1;
    updatedBtn.dataset.counts = Number(updatedBtn.dataset.counts)-1;
  }
  getData(isSuccess, data) {
    if (isSuccess) this.render(JSON.parse(data));
  }
  render(data) {
    const renderData = Object.values(data);
    const counts = renderData.length
    this.countsEl.innerText = counts
    if(counts){
      this.cardListEl.innerHTML = this.cardTemplate(Object.values(renderData));
      const buttonTemplate = `<div id="top-btn">Back to Top &#x2191</div>`
      this.cardListEl.insertAdjacentHTML('afterend', buttonTemplate);
      $on(qs('#top-btn'), "click", e => this.handleTopBtnClicked(e));
    }
    else qs('#top-btn').remove()
  }
  handleTopBtnClicked(){
    
    animations.scrollTop(window, 0, 2)
  }
}

export default CardList;
