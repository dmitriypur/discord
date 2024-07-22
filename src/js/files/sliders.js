import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import "../../scss/base/swiper.scss";

function initSliders() {
	if (document.querySelector('.swiper')) {

		new Swiper('.swiper', {

			modules: [Navigation, Autoplay],

			observer: true,
			observeParents: true,
			speed: 800,
			loop: true,

			autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},
			navigation: {
				prevEl: '.swiper__button-prev',
				nextEl: '.swiper__button-next',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					autoHeight: true,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 5,
				}
			},
		});
	}
	if (document.querySelector('.swiper-devices')) {

		new Swiper('.swiper-devices', {

			modules: [Autoplay],

			slidesPerView: 'auto',
			spaceBetween: 90,
			speed: 5000,
			loop: true,
			allowTouchMove: false, // можно ещё отключить свайп
			autoplay: {
				delay: 0,
				disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия
			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});