/*Ändra navbar style när vi scrollar  */
window.addEventListener('scroll', () => {   /* Denna visar vad det är för event som ska ändras "scroll" */ 
    document.querySelector('nav').classList.toggle  /* Vilken klass som ska påverkas */ 
    ('window-scroll', window.scrollY > 0) /* Denna klassen window-scroll är kopplad till en style vi har gjort så varje gång man scrollar så ändras färgen. Gör detta för att man ska kunna läsa vad det står för annars kan texten överlapa. */ 
})

/* Faq Gömma, visa Svar */ 
const faqs = document.querySelectorAll('.faq'); /* Denna påverkar vad det ska handla om allt inom faq */ 

faqs.forEach(faq => {   /* För varje faq kommer detta påverkas */ 
    faq.addEventListener('click', () => {   /* När du klickar på faq så kommer den öppnas och du ska kunna se p-taggarna. Open är det som påverkas, opens konfiguration hittar ni i stylen.  */
        faq.classList.toggle('open');


        /* Ändra icon på Faq */ 
        const icon = faq.querySelector('.faq_icon i');  /* Detta ska påverka ikonerna inom i */ 
        if(icon.className === 'uil uil-plus') { /* Om klassen namnet är ett plus så kommer det ändras till ett minus Som visas nedan. */ 
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus" /* Annars om det är ett minus så kommer det bli ett plus osv. */ 
        }
    })
})


/* Visa och gömma nav menyn */ 
const menu = document.querySelector(".nav_menu");   /* påverkar klassen nav_menu */ 
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener('click', () => {   /* Så när man klickar menubtn ska detta hända nedan */ 
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";    /* Gör så att man kan stänga menyn */ 
    menubtn.style.display = "none";     /* Gör så att menyn försvinner */ 
}) 

/* Stänga av nav menyn */ 
const closeNav = () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block";
}
closebtn.addEventListener('click', closeNav)
