document.querySelector('.questions__list').addEventListener('click', e => {
  e.target.parentNode.lastElementChild.classList.toggle('is-hidden');
});
