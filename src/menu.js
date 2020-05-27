const menuPage = () =>{
    let menu = document.createElement('div');
    menu.setAttribute('id', 'menu-page-content');
    menu.textContent = 'Menu Content';
    return menu;
}

export {menuPage};