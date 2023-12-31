let latters = document.querySelectorAll('h2 span');
latters.forEach(e => {
    e.style.color = `rgb(${Math.floor(255 * Math.random())},${Math.floor(255 * Math.random())},${Math.floor(255 * Math.random())})`;
    console.log(e);
})
setTimeout(() => {
    $('section').fireworks();

}, 3000);