import {menuPage} from './menu'
import {contactPage} from './contact'
import {homePage} from './home'

const parentContainer = document.querySelector('#content');


const indexLogic = () =>{
    let currentPage = homePage();
    let header = document.createElement('header');
    let title = document.createElement('h1');
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    title.textContent = 'Nature\'s Kitchen';
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
        card.removeChild(card.lastChild);
        parentContainer.removeChild(parentContainer.lastChild);
        card.appendChild(homePage())
        parentContainer.appendChild(card);
        currentPage = homePage();
    })

    menuBtn.addEventListener('click', ()=>{
        card.removeChild(card.lastChild);
        parentContainer.removeChild(parentContainer.lastChild);
        card.appendChild(menuPage())
        parentContainer.appendChild(card);
        currentPage = menuPage();
    })

    contactBtn.addEventListener('click', ()=>{
        card.removeChild(card.lastChild);
        parentContainer.removeChild(parentContainer.lastChild);
        card.appendChild(contactPage())
        parentContainer.appendChild(card);
        currentPage = menuPage();
    })

    parentContainer.appendChild(header);
    card.appendChild(nav);
    card.appendChild(homePage())
    parentContainer.appendChild(card);
   
    return parentContainer;

};

indexLogic();

