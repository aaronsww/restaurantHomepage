import {homeBase} from './home';

function defaultHome(){
    const content = document.querySelector("#content");
    const topBar = document.createElement('div');
    topBar.setAttribute('id','topBar');

    const homeBtn = document.createElement('div');
    homeBtn.textContent = "Home";
    homeBtn.setAttribute('id','homeBtn');

    const menuBtn = document.createElement('div');
    menuBtn.textContent = "Menu";
    menuBtn.setAttribute('id','menuBtn');

    const contactBtn = document.createElement('div');
    contactBtn.textContent = "Contact";
    contactBtn.setAttribute('id','contactBtn');
    
    topBar.appendChild(homeBtn);
    topBar.appendChild(menuBtn);
    topBar.appendChild(contactBtn);
    content.appendChild(topBar);

    console.log("hey ;)");

}

export {defaultHome};