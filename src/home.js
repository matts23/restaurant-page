const homePage = () =>{
    let page = document.createElement('div');
    let title = document.createElement('h2');
    let text = document.createElement('p');

    title.setAttribute('class', 'page-title');
    title.textContent='Bringing Cooking Back to the Basics';
    text.setAttribute('id', 'home-content');
    page.setAttribute('class','page-content');
    text.textContent = `We are bringing primal cooking techniques
    to the modern dining experience through innovative methods of
    capturing what it truly means to cook with fire.`

    
    page.appendChild(title);
    page.appendChild(text);
    

    return page;
}

export {homePage}