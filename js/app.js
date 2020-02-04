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
        // let sectionClass = section.classList.add('identifier');
        navItem.style.cursor = "pointer";
        navItem.addEventListener('click', handleNavItemClick);
        navItem.innerHTML = `<div data-id=${section.id} class="menu__link">${sectionTitle}</div>`;
        nav.appendChild(navItem);
    }
}
navElements();


function addActive(id) {
    console.log('#' + id);
    let current = document.querySelector('.your-active-class');
    current.classList.remove('your-active-class');
    let item = document.querySelector(`#${id}`);
    item.classList.add('your-active-class');
}

//scroll response

function onScroll() {
    const sections = document.querySelectorAll('section');

    console.log('scrolling...');

    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        let area = section.getBoundingClientRect();

        if (area.bottom >= 0 + 52) {
            addActive(section.id);
            break;
        }
    }
}

document.addEventListener('scroll', onScroll);
//End of Main Functions