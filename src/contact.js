const contactPage = () =>{
    let page = document.createElement('div');
    let title = document.createElement('h2');
    let phone = document.createElement('h3');
    let address = document.createElement('h4');

    title.textContent = 'Contact Us';
    phone.textContent = '100-200-3000';
    address.textContent = '100 Park Way, Madison,GA';

    let form = document.createElement('form');

    let emailAddressLabel = document.createElement('label');
    emailAddressLabel.textContent = 'Email Address';
    let emailAddress = document.createElement('input');
    emailAddress.setAttribute('type','text');

    let messageLabel = document.createElement('label');
    let message = document.createElement('textarea');
    messageLabel.textContent = 'Enter Message';
    message.setAttribute('id','message-input');

    let submit = document.createElement('button');
    submit.textContent='Submit';
    submit.setAttribute('id','form-submit');

    page.setAttribute('class', 'page-content');

    form.appendChild(emailAddressLabel);
    form.appendChild(emailAddress);
    form.appendChild(messageLabel);
    form.appendChild(message);
    form.appendChild(submit);

    page.appendChild(title);
    page.appendChild(phone);
    page.appendChild(address);
    page.appendChild(form);
    return page;
}

export {contactPage};