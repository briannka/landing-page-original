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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navElements() {
    const nav = document.getElementById('navbar__list');
    const sections = document.querySelectorAll('section');

    for (i = 0; i < sections.length; i++) {
        const navItem = document.createElement('li');
        let section = sections[i];
        let sectionTitle = section.getElementsByTagName('h2')[0].innerHTML;
        navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${sectionTitle}</a>`;
        nav.appendChild(navItem);
    }
}
navElements();




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
