// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";


let headerMobile = document.querySelector('.header__mobile');

document.addEventListener('click', e => {
    let target = e.target;
    if(target.classList.contains('hamburger')){
        headerMobile.classList.add('open')
    }

    if(target.classList.contains('close') || target.classList.contains('menu__link')){
        headerMobile.classList.remove('open')
    }
})


let video = document.querySelector('.video');

var iframeVideo = document.querySelectorAll('iframe')
Array.from(iframeVideo).forEach(function(elem){

	let src = elem.getAttribute('src')

	var parentDiv = elem.parentNode;
	var srcArr = src.split('/');
	var viseoCode = srcArr[srcArr.length - 1];
	viseoCode = viseoCode.split('?')[0];
	if(src.indexOf('youtube.com') != -1){
		var videoBox = document.createElement('div');
		videoBox.classList.add('box');
		parentDiv.replaceChild(videoBox, elem);
		videoBox.innerHTML = `
			<div class="video video--enabled">
                <a class="video__link" href="https://www.youtube.com/watch?v=${viseoCode}">
                    <picture>
                        <source srcset="https://i.ytimg.com/vi_webp/${viseoCode}/maxresdefault.webp" type="image/webp">
                        <img class="video__media" src="https://i.ytimg.com/vi/${viseoCode}/maxresdefault.jpg" alt="alt">
                    </picture>
                </a>
                <button class="video__button" aria-label="Запустить видео"></button>
            </div>
		`
	}
})

function findVideos() {
    let videos = document.querySelectorAll('.video');
 
    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
 }
 
 function setupVideo(video) {
    let link = video.querySelector('.video__link');
    let media = video.querySelector('.video__media');
    let button = video.querySelector('.video__button');
    let id = parseMediaURL(media);
 
    video.addEventListener('click', () => {
        let iframe = createIframe(id);
 
        link.remove();
        button.remove();
        video.appendChild(iframe);
    });
 
    link.removeAttribute('href');
    video.classList.add('video--enabled');
 }
 
 function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);
 
    return match[1];
 }
 
 function createIframe(id) {
    let iframe = document.createElement('iframe');
 
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');
 
    return iframe;
 }
 
 function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1&controls=0';
 
    return 'https://www.youtube.com/embed/' + id + query;
 }
 
findVideos();



// animate
// if (window.innerWidth > 767.98){
    let users = document.querySelectorAll('.childs li');
    let i = 0;
    setInterval(function(){ 
        i++
        if(i == 2){
            users[0].classList.add('active');
        }
        if(i == 3){
            users[1].classList.add('disabled');
        }
        if(i == 5){
            users[2].classList.add('disabled');
        }
        if(i == 7){
            users[0].classList.remove('active');
            users[2].classList.remove('disabled');
            users[2].classList.add('active')
        }
        if(i == 9){
            users[0].classList.add('active');
        }
        if(i == 12){
            users[0].classList.remove('active');
            users[1].classList.remove('disabled');
            users[2].classList.remove('active')
        }

        if(i == 13){
            i = 0;
        }
    }, 1000);

    let businessChat = document.querySelectorAll('.business__chat-item');
    // console.log(businessChat);
    let j = 0;

    setInterval(function(){ 
        j++
        if(j == 1){
            businessChat[0].classList.add('active');
        }
        if(j == 4){
            businessChat[0].classList.remove('active');
            businessChat[1].classList.add('active');
        }
        if(j == 7){
            businessChat[1].classList.remove('active');
            businessChat[2].classList.add('active');
        }
        if(j == 10){
            businessChat[2].classList.remove('active');
            businessChat[3].classList.add('active');
        }
        if(j == 12){
            businessChat[3].classList.remove('active');
        }

        if(j == 13){
            j = 0;
        }
    }, 1000);


    let titleReplace = document.querySelector('.title__replace');
    window.addEventListener('resize', function(){
        if (window.innerWidth < 1441){
            if(titleReplace.innerHTML == 'Безопасность и&nbsp;конфиденциальность'){
                document.querySelector('.title__replace').innerHTML = 'Конфиденциальность и&nbsp;безопасность';
            }
            
        }
    })
    
    // document.querySelector('.title__replace').
// }