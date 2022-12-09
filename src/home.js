function homeBase(){
    const resTitle = document.createElement('div');
    resTitle.textContent = "Sushi Restaurant";
    resTitle.setAttribute('id','title');
    const content = document.querySelector("#content");
    content.appendChild(resTitle);
    console.log("hey ;)");
}

export {homeBase};