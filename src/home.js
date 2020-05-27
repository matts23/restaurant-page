const homePage = () =>{
    let page = document.createElement('div');
    page.setAttribute('id','home-page-content');
    page.textContent = 'Home Page'

    return page;
}

export {homePage}