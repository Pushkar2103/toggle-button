let button = document.querySelector(".switch");
let text = document.querySelector("#text");
let mode = "light";

button.addEventListener("click", () => {
    if(mode=="light") {
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        text.innerText = "Dark Mode";
        text.style.color = "white";
    }
    else {
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        text.innerText = "Light Mode";
        text.style.color = "black";
    }
});