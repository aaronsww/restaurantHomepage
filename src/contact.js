import {defaultHome} from './defaultHome';  

function contactBase(mainContent){

    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }

    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id','contactContainer');
    const wording = document.createElement('div');
    wording.setAttribute('id','wording');
    wording.innerText = `\xa0\xa0\xa0\xa0\xa066/1, Siddapura Village, \n\xa0\xa0\xa0\xa0\xa0\xa0Whitefield, Bangalore
    \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0+917899946332
    \n\xa0\xa0Mon-Thur: 10:30am - 9pm
    \t\xa0\xa0\xa0\xa0Fri-Sat: 10:30am - 11pm
    \t\xa0\xa0\xa0\xa0\xa0\xa0\xa0Sun:10:30am - 9pm`;   
    contactContainer.innerText = "範囲" 
    contactContainer.appendChild(wording);
    mainContent.appendChild(contactContainer);
    content.appendChild(mainContent);
}

export {contactBase};
