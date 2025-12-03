import { COURCE_TYPES_TO_COLORS } from '../constants/constants.js';

export const createCourceCard = (courceData) => `
<div class="courses__card">
  <div class="courses__banner">
    <img class='courses__image' src="${courceData.imgPath}" alt="first-card" />
  </div>
  <div class="courses__content">
    <div class="courses__type courses__type--${COURCE_TYPES_TO_COLORS[courceData.type]}">${courceData.type}</div>
    <h3 class="courses__title">
      ${courceData.title}
    </h3>
    <div class="courses__details">
      <span class="courses__price">${courceData.price}</span>
      <span class="courses__username">| by ${courceData.lector}</span>
    </div>
  </div>
</div>`;
