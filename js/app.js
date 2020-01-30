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
 // Begin Main Functions



// response upon click

function handleNavItemClick(e) {
    let current = document.querySelector('.your-active-class');
    current.classList.remove('your-active-class');
    let dataId = e.target.getAttribute('data-id');
    let active = document.getElementById(dataId);
    active.classList.add('your-active-class');
    let top = active.offsetTop;
    window.scrollTo({ top, behavior: 'smooth'})
}

// build the nav

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

//End of Main Functions