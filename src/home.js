function homeBase(){
    const content = document.querySelector("#content");

    const resTitle = document.createElement('div');
    resTitle.textContent = "Sushi Restaurant";
    resTitle.setAttribute('id','title');
    content.appendChild(resTitle);

    const resAbout = document.createElement('div');
    resAbout.textContent = `Excellent food. Menu is extensive and seasonal to a particularly high
    standard. Definitely fine dining. It can be expensive but worth it and
    they do different deals on different nights so it's worth checking them
    out before you book.`;
    resAbout.setAttribute('id','description');
    content.appendChild(resAbout);

}

export {homeBase};