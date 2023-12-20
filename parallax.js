const imageElement = document.getElementById('main-image');
console.dir(imageElement);
new simpleParallax(imageElement, {
    scale: 1.6,
    delay: 0.1,
});