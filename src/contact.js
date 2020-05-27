const contactPage = () =>{
    let menu = document.createElement('div');
    menu.setAttribute('id', 'contact-page-content');
    menu.textContent = 'Contact Content';
    return menu;
}

export {contactPage};