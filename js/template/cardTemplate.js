export const cardTemplate = cardArr => {
  return cardArr.reduce((ac, c) => {
    return (ac += `
    <li class="card-list-item">
      <div class="card">
        <img class="card__thumbnail" src="${c.image}">
        <div class="card__desc-wrapper">
          <p class="desc-title">${c.title}</p>
          <p class="desc-address"> ${c.address}</p>
          <p class="desc-time"> ${c.time}</p>
          <p class="desc-phone">${c.phone}</p>
          <button class="like-button">❤️
            <span class="like-count">${c.likes}</span>
          </button>
        </div>
      </div>
      </li>
    `);
  }, ``);
};
