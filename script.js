let btn = document.querySelector('.btn');
let card = document.querySelector('.card');

btn.addEventListener('click', e => {
	card.classList.toggle('active');
	// btn.innerText = card.classList.contains('active') ? 'Close' : 'More';
});
