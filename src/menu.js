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
    dishOne.textContent = "Tuna Sushi";
    menuContainer.appendChild(dishOne);

    const dishTwo = document.createElement('div');
    dishTwo.setAttribute('id','dishes');
    dishTwo.textContent = "Salmon Sushi";
    menuContainer.appendChild(dishTwo);

    const dishThree = document.createElement('div');
    dishThree.setAttribute('id','dishes');
    dishThree.textContent = "Basa Sushi";
    menuContainer.appendChild(dishThree);

    const dishFour = document.createElement('div');
    dishFour.setAttribute('id','dishes');
    dishFour.textContent = "Gammy Sushi";
    menuContainer.appendChild(dishFour);

    const dishFive = document.createElement('div');
    dishFive.setAttribute('id','dishes');
    dishFive.textContent = "Gammy Sushi";
    menuContainer.appendChild(dishFive);

    const dishSix = document.createElement('div');
    dishSix.setAttribute('id','dishes');
    dishSix.textContent = "Gappy Sushi";
    menuContainer.appendChild(dishSix);

    mainContent.appendChild(menuContainer);
    content.appendChild(mainContent);
}

export {menuBase};

 