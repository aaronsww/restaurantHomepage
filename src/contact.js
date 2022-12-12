import {defaultHome} from './defaultHome';

function contactBase(mainContent){

    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id','menuContainer');
    mainContent.appendChild(menuContainer);

    menuContainer.appendChild(image);

    content.appendChild(mainContent);
}

export {contactBase};