export const createFilter = ({ isActive, type, count }) => `
<button class="filters__button ${isActive ? 'filters__button--active' : ''}" data-filter="${type}">
  ${type}
  <span class="filters__count">${count}</span>
</button>`;
