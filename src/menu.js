import {defaultHome} from './defaultHome';

function menuBase(mainContent){

    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }

    mainContent.setAttribute('id','mainContent');

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id','menuContainer');

    const dishOne = document.createElement('div');
    dishOne.setAttribute('id','dishes');
    const img1 = document.createElement("img");
    img1.src = "/dist/images/dish1.png"; 
    dishOne.appendChild(img1);
    menuContainer.appendChild(dishOne);

    const dishTwo = document.createElement('div');
    dishTwo.setAttribute('id','dishes');
    const img2 = document.createElement("img");
    img2.src = "/dist/images/dish2.png"; 
    dishTwo.appendChild(img2);
    menuContainer.appendChild(dishTwo);

    const dishThree = document.createElement('div');
    dishThree.setAttribute('id','dishes');
    const img3 = document.createElement("img");
    img3.src = "/dist/images/dish3.png"; 
    dishThree.appendChild(img3);
    menuContainer.appendChild(dishThree);

    const dishFour = document.createElement('div');
    dishFour.setAttribute('id','dishes');
    const img4 = document.createElement("img");
    img4.src = "/dist/images/dish4.png"; 
    dishFour.appendChild(img4);
    menuContainer.appendChild(dishFour);

    const dishFive = document.createElement('div');
    dishFive.setAttribute('id','dishes');
    const img5 = document.createElement("img");
    img5.src = "/dist/images/dish5.png"; 
    dishFive.appendChild(img5);
    menuContainer.appendChild(dishFive);

    const dishSix = document.createElement('div');
    dishSix.setAttribute('id','dishes');
    const img6 = document.createElement("img");
    img6.src = "/dist/images/dish6.png"; 
    dishSix.appendChild(img6);
    menuContainer.appendChild(dishSix);

    mainContent.appendChild(menuContainer);
    content.appendChild(mainContent);
}

export {menuBase};

 