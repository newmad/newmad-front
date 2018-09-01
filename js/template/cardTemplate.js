export const cardTemplate = cardArr => {
  return cardArr.reduce((ac, c) => {
    return (ac += `
    <li class="card-list-item" id="${c.id}">
    <a>
      <div class="card">
        <img class="card__thumbnail" src="${c.img}">
        <div class="card__desc-wrapper">
          <div class="desc-box">
            <p class="desc-title">${c.title}</p>
            <p class="desc-address"> ${c.address}</p>
            <p class="desc-time"> ${c.holiday}</p>
            <p class="desc-phone">${c.phone}</p>
            <button data-like="like" class="like-button">
            <img src="./assets/images/icon-heart.svg" class="icon-heart">
              <span id="likeId-${c.id}" data-counts="${c.like}" data-like="like" class="like-count">${c.like}</span>
            </button>
          </div>
        </div>
      </div>
      </a>
      </li>
    `);
  }, ``);
};
