const menuArray = [
    {
        dish: 'Lamb Chops',
        description: 'Lamb chops with gravy and potatoes',
        price: 14.99
    },
    {
        dish: 'Pan Seared Steak',
        description: 'New York Strip with spring greens',
        price: 19.99
    },
    {
        dish: 'Atlantic Cod',
        description: 'Served with Arugala and toast',
        price: 17.99
    },
    {
        dish: 'Garden Salad',
        description: 'Fresh mixed greens with walnuts and cranberries',
        price: 10.99
    }
]

const menuPage = () =>{
    let menu = document.createElement('div');
    menu.setAttribute('class', 'page-content');

    let menuItemContainer = document.createElement('div');
    menuItemContainer.setAttribute('id', 'menu-container');

    let title = document.createElement('h2');
    title.textContent = 'Menu';

    for(let i=0; i<menuArray.length; i++){
        let menuItem = document.createElement('div');
        menuItem.setAttribute('class','menu-item');

        let dish = document.createElement('h3');
        dish.textContent = menuArray[i].dish;
        menuItem.appendChild(dish);

        let dishDescription = document.createElement('h4');
        dishDescription.textContent=menuArray[i].description;
        menuItem.appendChild(dishDescription);

        let dishPrice = document.createElement('h5');
        dishPrice.textContent=`$${menuArray[i].price}`;
        menuItem.appendChild(dishPrice)

        menuItemContainer.appendChild(menuItem);
    }
    menu.appendChild(title);
    menu.appendChild(menuItemContainer);
    return menu;
}

export {menuPage};