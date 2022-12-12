import {defaultHome} from './defaultHome';

function homeBase(mainContent){

    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }
    mainContent.setAttribute('id','mainContent');

    const resTitle = document.createElement('div');
    resTitle.textContent = "寿司屋";
    resTitle.setAttribute('id','title');
    mainContent.appendChild(resTitle);

    const resAbout = document.createElement('div');
    resAbout.textContent = "The traditional cuisine of Japan (Japanese: washoku) is based on rice with miso soup and other dishes; there is an emphasis on seasonal ingredients. Side dishes often consist of fish, pickled vegetables, and vegetables cooked in broth. Seafood is common, often grilled, but also served raw as sashimi or in sushi.";
    resAbout.setAttribute('id','description');
    mainContent.appendChild(resAbout);

    content.appendChild(mainContent);
}

export {homeBase};