function showelements(){
    //Uncomment the line below if you want the loader to hide on page load
    document.getElementsByClassName("loader")[0].classList.add("fadeout");
    setTimeout(() => {  document.getElementsByClassName("loader")[0].classList.add("hidden"); }, 1000);
    var allElements = document.getElementsByTagName('*');
    setTimeout(() => {
        for (let element of allElements) {
            if(element.classList.contains("loader") != true && element.tagName != "HTML"){
                element.classList.add("fadein");
            }
        }
    }, 1000);
}

function hideload(){
    console.log("Loaded");
    setTimeout(showelements, 1000);
}

window.onload = hideload
