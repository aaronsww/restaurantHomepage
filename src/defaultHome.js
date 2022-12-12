import {homeBase} from './home';
import {menuBase} from './menu';

function defaultHome(){
    const content = document.querySelector("#content");
    const topBar = document.createElement('div');
    topBar.setAttribute('id','topBar');

    const homeBtn = document.createElement('div');
    homeBtn.textContent = "Home";
    homeBtn.setAttribute('id','homeBtn');
    homeBtn.style.color = "red";

    const menuBtn = document.createElement('div');
    menuBtn.textContent = "Menu";
    menuBtn.setAttribute('id','menuBtn');

    const contactBtn = document.createElement('div');
    contactBtn.textContent = "Contact";
    contactBtn.setAttribute('id','contactBtn');

    const displayTitle = document.createElement('div');
    displayTitle.textContent = "BIG TEXT";
    displayTitle.setAttribute('id','displayTitle');

    const mainContent = document.createElement('div');

    topBar.appendChild(homeBtn);
    topBar.appendChild(menuBtn);
    topBar.appendChild(contactBtn);
    content.appendChild(topBar);
    mainContent.appendChild(displayTitle);
    content.appendChild(mainContent);

    homeBtn.addEventListener('click', () => {
        homeBtn.style.color = "red";
        menuBtn.style.color = "white";
        contactBtn.style.color = "white";
        homeBase(mainContent);});
    menuBtn.addEventListener('click', () => {
        homeBtn.style.color = "white";
        menuBtn.style.color = "red";
        contactBtn.style.color = "white";
        menuBase(mainContent);});
        contactBtn.addEventListener('click', () => {
            homeBtn.style.color = "white";
            menuBtn.style.color = "white";
            contactBtn.style.color = "red";
            menuBase(mainContent);});
}
    
export {defaultHome};
