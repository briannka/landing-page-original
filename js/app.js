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

//active button



// response upon click

function handleNavItemClick(e) {
    let dataId = e.target.getAttribute('data-id');
    let active = document.getElementById(dataId);
    let top = active.offsetTop;
    window.scrollTo({ top, behavior: 'smooth'})
}

// build the nav

function navElements() {
    const nav = document.getElementById('navbar__list');
    const sections = document.querySelectorAll('section');

    for (let i = 0; i < sections.length; i++) {
        const navItem = document.createElement('li');
        let section = sections[i];
        let sectionTitle = section.getElementsByTagName('h2')[0].innerHTML;
        navItem.style.cursor = "pointer";
        navItem.addEventListener('click', handleNavItemClick);
        navItem.innerHTML = `<div data-id=${section.id} class="menu__link">${sectionTitle}</div>`;
        nav.appendChild(navItem);
    }
}
navElements();


function addActive(id) {
    let previousItem = document.querySelector('.your-active-class');
    previousItem.classList.remove('your-active-class');
    let current = document.querySelector(`#${id}`);
    current.classList.add('your-active-class');

    let previousBtn = document.querySelector('.active');
    if (previousBtn) {
        previousBtn.classList.remove('active');
    }
    let navBtn = document.querySelector(`[data-id = ${id}]`);
    navBtn.classList.add('active');

}

//scroll response

function onScroll() {
    const sections = document.querySelectorAll('section');

    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        let area = section.getBoundingClientRect();

        const navBar = document.getElementById('navbar__list');
        let offset = navBar.getBoundingClientRect().height;
        if (area.bottom >= 0 + offset) {
            addActive(section.id);
            break;
        }
    }
}

document.addEventListener('scroll', onScroll);
//End of Main Functions