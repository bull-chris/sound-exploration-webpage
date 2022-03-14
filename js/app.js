let popup = document.getElementById('popup')
let howToPlayBtn = document.getElementById('instruction-button');
let closeBtn = document.getElementById('popup-close');

popup.classList.add('hidden')

howToPlayBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
})
closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
})