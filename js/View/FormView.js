import { qs, $on } from "../helper/helper.js";

class FormView {
  constructor({ searchFormSelector, searchInputSelector, wrapper, ajax, url }) {
    Object.assign(this, { ajax, url });
    this.searchFormSelector = qs(searchFormSelector);
    this.searchInputSelector = qs(searchInputSelector);
    this.wrapperSelector = qs(wrapperSelector);
  }
}

export default FormView;
