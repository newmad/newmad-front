import { $on } from "./heloer/helper.js";
import CardList from "./View/CardList.js";
import { cardTemplate } from "./template/cardTemplate.js";

$on(document, "DOMContentLoaded", () => {
  const cardList = new CardList({
    cardListSelector: ".card-list",
    cardTemplate,
  });
});
