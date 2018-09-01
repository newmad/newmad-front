import { $on, qs } from "../helper/helper.js";

class Controller {
  constructor({ cardList,form,}){
    Object.assign(this, { cardList, form});
    form.notifyKeyWordSubmit = this.renderByKeyWord.bind(this)
  }
  renderByKeyWord(data){
    this.cardList.render(data);
  }
 
}

export default Controller;
