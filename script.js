let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let container = document.querySelector('.slide');
    container.scrollBy({
        left: container.clientWidth,
        behavior: 'smooth'
    });
});

prev.addEventListener('click', function() {
    let container = document.querySelector('.slide');
    container.scrollBy({
        left: -container.clientWidth,
        behavior: 'smooth'
    });
});
