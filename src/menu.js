import {defaultHome} from './defaultHome';

function menuBase(mainContent){

    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id','menuContainer');
    mainContent.appendChild(menuContainer);

    var url = '.disc/images/sushiSingle.jpeg'; 
    var image = new Image();
    image.src = url;

    menuContainer.appendChild(image);

    content.appendChild(mainContent);
}

export {menuBase};