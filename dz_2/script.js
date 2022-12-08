
const button = document.querySelector('.j-button');

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const windowInnerWidthScroll = window.innerWidth;
const windowInnerHeightScroll = window.innerHeight;

const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;

const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

button.addEventListener('click', () => {

alert(`Размер экрана: ${screenWidth}px x ${screenHeight}px. 
Размер окна браузера + полоса прокрутки: ${windowInnerWidthScroll}px x ${windowInnerHeightScroll}px.
Размер окна браузера без полосы прокрутки: ${windowInnerWidth}px x ${windowInnerHeight}px.
Размер страницы: ${pageWidth}px x ${pageHeight}px.`);

});