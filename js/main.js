(function () {
    const burgerBtn = document.querySelector('.burger__button')
    const body = document.body
    const navList = document.querySelectorAll('.nav__link')

    burgerBtn.addEventListener('click', (e) => {
        body.classList.toggle('body--opened-menu')
    })

    for (let i = 0; i < navList.length; i++) {
        navList[i].addEventListener('click', () => {
            body.classList.remove('body--opened-menu')
        })
    }
})()