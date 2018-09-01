import { qs, $on } from "../helper/helper.js";

class FormView {
  constructor({ searchFormSelector, searchInputSelector, wrapperSelector, ajax, url, renderHelper }) {
    Object.assign(this, { ajax, url, renderHelper });
    this.searchFormEl = qs(searchFormSelector);
    this.searchInputEl = qs(searchInputSelector);
    this.wrapperEl = qs(wrapperSelector);
    this.bindEvents();
    this.notifyKeyWordSubmit = null

  }
  bindEvents(){
    $on(this.searchFormEl, "submit", e => this.hanldeSubmit(e))
    $on(this.searchFormEl, "blur", () => this.clearInput());
  }
  hanldeSubmit(e){
    e.preventDefault();
    const keyword = this.searchInputEl.value.trim();
    keyword && this.handlePost(keyword)
  }
  handlePost(keyword){
    this.ajax(`${this.url.search}?keyword=${keyword}`, this.getKeyWord.bind(this));
  }
  getKeyWord(isSuccess, data){
     this.notifyKeyWordSubmit(JSON.parse(data));
     this.clearInput();
  }
  clearInput(){
    this.searchInputEl.value = "";
  }
}

export default FormView;
