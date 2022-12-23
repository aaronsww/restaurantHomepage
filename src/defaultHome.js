import {homeBase} from './home';
import {menuBase} from './menu';
import {contactBase} from './contact';
import sushiBackground from './image/sushii.png';

function defaultHome(){
    const content = document.querySelector("#content");
    const topBar = document.createElement('div');
    topBar.setAttribute('id','topBar');
 
    const homeBtn = document.createElement('div');
    homeBtn.textContent = "HOME";
    homeBtn.setAttribute('id','homeBtn');
    homeBtn.style.color = "red";

    const menuBtn = document.createElement('div');
    menuBtn.textContent = "MENU";
    menuBtn.setAttribute('id','menuBtn');

    const contactBtn = document.createElement('div');
    contactBtn.textContent = "CONTACT";
    contactBtn.setAttribute('id','contactBtn');

    const mainContent = document.createElement('div');

    topBar.appendChild(homeBtn);
    topBar.appendChild(menuBtn);
    topBar.appendChild(contactBtn);
    content.appendChild(topBar);
    content.appendChild(mainContent);

    homeBase(mainContent);

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
            contactBase(mainContent);});
}

export {defaultHome};
