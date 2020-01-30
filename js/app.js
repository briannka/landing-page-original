/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let section = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// function active() {
//     let activeLi = document.getElementsByClassName('your-active-class');
//     if (activeLi.length > 0) {
//         activeLi[0].className = activeLi[0].className.replace('your-active-class', '');
//     }
//     this.className += 'your-active-list';
// }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function handleNavItemClick(e) {
    let current = document.querySelector('.your-active-class');
    current.classList.remove('your-active-class');
    let dataId = e.target.getAttribute('data-id');
    let active = document.getElementById(dataId);
    active.classList.add('your-active-class');
    let top = active.offsetTop;
    window.scrollTo({ top, behavior: 'smooth'})
}

function navElements() {
    const nav = document.getElementById('navbar__list');
    const sections = document.querySelectorAll('section');

    for (i = 0; i < sections.length; i++) {
        const navItem = document.createElement('li');
        let section = sections[i];
        let sectionTitle = section.getElementsByTagName('h2')[0].innerHTML;
        // let sectionClass = section.classList.add('identifier');
        navItem.style.cursor = "pointer";
        navItem.addEventListener('click', handleNavItemClick)
        navItem.innerHTML = `<div data-id=${section.id} class="menu__link">${sectionTitle}</div>`;
        nav.appendChild(navItem);
    }
}
navElements();




// Add class 'active' to section when near top of viewport

// for (i = 0; i < section.length; i++) {
//     section[i].addEventListener("click", active())
// }

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
