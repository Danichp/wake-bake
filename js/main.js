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
            if(body.classList.contains('body--opened-menu')){
                body.classList.remove('body--opened-menu')
            } else return
            
        })
    }

    // MODAL WINDOW
    const modalBtn = document.querySelector('.about__image-button')
    const closeModalBtn = document.querySelector('.modal-close')
    const modal = document.querySelector('.modal')

    const openModal = (e) =>{
        e.preventDefault()
        body.classList.add('body--opened-modal')
    }
    const closeModal = () =>{
        if(body.classList.contains('body--opened-modal')){
            body.classList.remove('body--opened-modal')
        } else return
    }

    
    modalBtn.addEventListener('click', openModal)

    closeModalBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        closeModal()
    })

    document.addEventListener('click', (e)=>{
        if(event.target == modal){
            closeModal()
        } else return
    })

    document.addEventListener('keyup', event =>{
        if(event.code == 'Escape'){
            closeModal()
        }
    })



    // TABS

    const tabControls = document.querySelector('.tab-controls') 
        
    tabControls.addEventListener('click', tabToggle)
    
    function tabToggle (e) {
        const tabControl = e.target.closest('.tab-controls__link')

        if(!tabControl) return
        e.preventDefault()
        if(tabControl.classList.contains('tab-controls__link--active')) return


        const tabContentId = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentId)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')
 

        activeControl.classList.remove('tab-controls__link--active')
        activeContent.classList.remove('tab-content--show')

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }
})()

