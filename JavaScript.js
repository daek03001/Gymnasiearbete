window.addEventListener('scroll', () => { 
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0) 
})

/* Faq Gömma, visa Svar */ 
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => { 
        faq.classList.toggle('open');


        /* Ändra icon på Faq */ 
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus"
        }
    })
})

