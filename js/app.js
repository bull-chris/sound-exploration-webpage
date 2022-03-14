let popup = document.getElementById('popup')
let howToPlayBtn = document.getElementById('instruction-button');
let closeBtn = document.getElementById('popup-close');

let videoDisplay = document.getElementById('video-display')
let videoPlay = document.getElementById('soundButton');
let closeVideoButton = document.getElementById('video-close');

popup.classList.add('hidden')
videoDisplay.classList.add('hidden');

howToPlayBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
})
closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
})

//video display play
videoPlay.addEventListener('click', () => {
    videoDisplay.classList.remove('hidden');
})
closeVideoButton.addEventListener('click', () => {
    videoDisplay.classList.add('hidden');
})