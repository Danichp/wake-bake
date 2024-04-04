(function () {
    // BURGER MENU
    const burgerBtn = document.querySelector('.burger__button')
    const body = document.body
    const navList = document.querySelectorAll('.nav__link')

    burgerBtn.addEventListener('click', (e) => {
        body.classList.toggle('body--opened-menu')
    })

    for (let i = 0; i < navList.length; i++) {
        navList[i].addEventListener('click', () => {
            if (body.classList.contains('body--opened-menu')) {
                body.classList.remove('body--opened-menu')
            } else return

        })
    }

    // MODAL WINDOW
    const modalBtn = document.querySelector('.about__image-button')
    const closeModalBtn = document.querySelector('.modal-close')
    const modal = document.querySelector('.modal')

    const openModal = (e) => {
        e.preventDefault()
        body.classList.add('body--opened-modal')
    }
    const closeModal = () => {
        if (body.classList.contains('body--opened-modal')) {
            body.classList.remove('body--opened-modal')
        } else return
    }


    modalBtn.addEventListener('click', openModal)

    closeModalBtn.addEventListener('click', (e) => {
        e.preventDefault()
        closeModal()
    })

    document.addEventListener('click', (e) => {
        if (event.target == modal) {
            closeModal()
        } else return
    })

    document.addEventListener('keyup', event => {
        if (event.code == 'Escape') {
            closeModal()
        }
    })



    // TABS

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', tabToggle)

    function tabToggle(e) {
        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return


        const tabContentId = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentId)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')


        activeControl.classList.remove('tab-controls__link--active')
        activeContent.classList.remove('tab-content--show')

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }


    // ACCORDION

    const accordionList = document.querySelectorAll('.accordion-list')

    accordionList.forEach(el => {
        el.addEventListener('click', e => {

            const accordionList = e.currentTarget
            const openedAccordionItem = accordionList.querySelector('.accordion-list__item--opened')
            const openedAccordionContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            if (openedAccordionItem && accordionItem !== openedAccordionItem) {
                openedAccordionContent.style.maxHeight = null
                openedAccordionItem.classList.remove('accordion-list__item--opened')
            }
            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }
        })
    })


    // SLIDER-GALLERY

    new Swiper('.gallery__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            451: {
                slidesPerView: 2,
            },
            601: {
                slidesPerView: 3,
            },
            901: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            },
        }
    });

    //   SLIDER TEASTIMONIALS 

    new Swiper('.testimonials__slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.testimonials__scrollbar',
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.05,
            },
        }


    });

    //   MASK INPUT TEL

    let inputsTel = document.querySelectorAll('input[type="tel"]')
    let im = new Inputmask ('+7 (999) 999-99-99')
    im.mask(inputsTel)

})()

