import {menuPage} from './menu'
import {contactPage} from './contact'
import {homePage} from './home'

const parentContainer = document.querySelector('#content');


const indexLogic = () =>{
    let currentPage = homePage();
    let header = document.createElement('header');
    let title = document.createElement('h1');
    title.textContent = 'Restaurant Title'
    let nav = document.createElement('nav');

    let homeBtn = document.createElement('button');
    homeBtn.setAttribute('class','nav-btn');
    homeBtn.textContent = 'Home';

    let menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.setAttribute('class','nav-btn');

    let contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.setAttribute('class','nav-btn');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    header.appendChild(title);
    header.appendChild(nav);

    homeBtn.addEventListener('click', ()=>{
        parentContainer.removeChild(parentContainer.lastChild);
        parentContainer.appendChild(homePage());
        currentPage = homePage();
    })

    menuBtn.addEventListener('click', ()=>{
        parentContainer.removeChild(parentContainer.lastChild);
        parentContainer.appendChild(menuPage());
        currentPage = menuPage();
        console.log(currentPage)
    })

    contactBtn.addEventListener('click', ()=>{
        parentContainer.removeChild(parentContainer.lastChild);
        parentContainer.appendChild(contactPage());
        currentPage = contactPage();
    })

    parentContainer.appendChild(header);
    console.log(currentPage);
    parentContainer.appendChild(currentPage);
    
    return parentContainer;

};

indexLogic();

