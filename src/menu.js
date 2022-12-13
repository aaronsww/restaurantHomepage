import {defaultHome} from './defaultHome';
import dish1 from './image/dish1.jpg';
import dish2 from './image/dish2.jpg';
import dish3 from './image/dish3.jpg';
import dish4 from './image/dish4.jpg';
import dish5 from './image/dish5.jpg';
import dish6 from './image/dish6.jpg';

function menuBase(mainContent){

    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }

    mainContent.setAttribute('id','mainContent');

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id','menuContainer');

    const dishOne = document.createElement('div');
    dishOne.setAttribute('id','dishes');
    // const img1 = document.createElement("img");
    // img1.src = "/dist/images/dish1.jpg"; 
    // dishOne.appendChild(img1);
    const myDish1 = new Image();
    myDish1.src = dish1;
    dishOne.appendChild(myDish1);
    const dishOneName = document.createElement('div');
    dishOneName.textContent = "Prawn Tempura Sushi Roll"
    dishOneName.setAttribute('id','dishName');
    const dishOneContent = document.createElement('div');
    dishOneContent.textContent = "Prawn tempura with seasonal vegetable"
    dishOneContent.setAttribute('id','dishContent');
    dishOne.appendChild(dishOneName);
    dishOne.appendChild(dishOneContent);
    menuContainer.appendChild(dishOne);

    const dishTwo = document.createElement('div');
    dishTwo.setAttribute('id','dishes');
    // const img2 = document.createElement("img");
    // img2.src = "/dist/images/dish2.jpg"; 
    // dishTwo.appendChild(img2);
    const myDish2 = new Image();
    myDish2.src = dish2;
    dishTwo.appendChild(myDish2);
    const dishTwoName = document.createElement('div');
    dishTwoName.textContent = "Tofu Salad Sushi Roll"
    dishTwoName.setAttribute('id','dishName');
    const dishTwoContent = document.createElement('div');
    dishTwoContent.textContent = "Fried tofu with seasonal vegetable"
    dishTwoContent.setAttribute('id','dishContent');
    dishTwo.appendChild(dishTwoName);
    dishTwo.appendChild(dishTwoContent);
    menuContainer.appendChild(dishTwo);

    const dishThree = document.createElement('div');
    dishThree.setAttribute('id','dishes');
    // const img3 = document.createElement("img");
    // img3.src = "/dist/images/dish3.jpg"; 
    // dishThree.appendChild(img3);
    const myDish3 = new Image();
    myDish3.src = dish3;
    dishThree.appendChild(myDish3);
    const dishThreeName = document.createElement('div');
    dishThreeName.textContent = "Crab Mayo Sushi Roll"
    dishThreeName.setAttribute('id','dishName');
    const dishThreeContent = document.createElement('div');
    dishThreeContent.textContent = "Processed crab meat stick with egg"
    dishThreeContent.setAttribute('id','dishContent');
    dishThree.appendChild(dishThreeName);
    dishThree.appendChild(dishThreeContent);
    menuContainer.appendChild(dishThree);

    const dishFour = document.createElement('div');
    dishFour.setAttribute('id','dishes');
    // const img4 = document.createElement("img");
    // img4.src = "/dist/images/dish4.jpg"; 
    // dishFour.appendChild(img4);
    const myDish4 = new Image();
    myDish4.src = dish4;
    dishFour.appendChild(myDish4);
    const dishFourName = document.createElement('div');
    dishFourName.textContent = "Cheese Sushi Roll"
    dishFourName.setAttribute('id','dishName');
    const dishFourContent = document.createElement('div');
    dishFourContent.textContent = "Cheese, chicken sausage with seasonal vegetable"
    dishFourContent.setAttribute('id','dishContent');
    dishFour.appendChild(dishFourName);
    dishFour.appendChild(dishFourContent);
    menuContainer.appendChild(dishFour);

    const dishFive = document.createElement('div');
    dishFive.setAttribute('id','dishes');
    // const img5 = document.createElement("img");
    // img5.src = "/dist/images/dish6.jpg "; 
    // dishFive.appendChild(img5);
    const myDish5 = new Image();
    myDish5.src = dish5;
    dishFive.appendChild(myDish5);
    const dishFiveName = document.createElement('div');
    dishFiveName.textContent = "Salmon Sushi Roll"
    dishFiveName.setAttribute('id','dishName');
    const dishFiveContent = document.createElement('div');
    dishFiveContent.textContent = "Salmon, eggless mayonnaise and seaweed"
    dishFiveContent.setAttribute('id','dishContent');
    dishFive.appendChild(dishFiveName);
    dishFive.appendChild(dishFiveContent);
    menuContainer.appendChild(dishFive);

    const dishSix = document.createElement('div');
    dishSix.setAttribute('id','dishes');
    // const img6 = document.createElement("img");
    // img6.src = "/dist/images/dish5.jpg "; 
    // dishSix.appendChild(img6);
    const myDish6 = new Image();
    myDish6.src = dish6;
    dishSix.appendChild(myDish6);
    const dishSixName = document.createElement('div');
    dishSixName.textContent = "Sushi Family Set"
    dishSixName.setAttribute('id','dishName');
    const dishSixContent = document.createElement('div');
    dishSixContent.textContent = "Tuna, Salmon, Egg, Prawn and Eel fish sushi"
    dishSixContent.setAttribute('id','dishContent');
    dishSix.appendChild(dishSixName);
    dishSix.appendChild(dishSixContent);
    menuContainer.appendChild(dishSix);

    mainContent.appendChild(menuContainer);
    content.appendChild(mainContent);
}

export {menuBase};

 