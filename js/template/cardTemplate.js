export const cardTemplate = cardArr => {
  return cardArr.reduce((ac, c) => {
    return (ac += `
    <li class="card-list-item">
    <a>
      <div class="card">
        <img class="card__thumbnail" src="${c.img}">
        <div class="card__desc-wrapper">
          <p class="desc-title">${c.title}</p>
          <p class="desc-address"> ${c.address}</p>
          <p class="desc-time"> ${c.holiday}</p>
          <p class="desc-phone">${c.phone}</p>
          <button class="like-button">❤️
            <span class="like-count">${c.like}</span>
          </button>
        </div>
      </div>
      </a>
      </li>
    `);
  }, ``);
};
