window.addEventListener('scroll', () => {
    let buttonUp = document.querySelectorAll('.buttonUp')[0];
    buttonUp.classList.toggle('show', window.scrollY > 200);
})
