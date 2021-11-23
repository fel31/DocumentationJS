let icon = document.querySelector("#hamburger");
let nav = document.querySelectorAll('#menu');
console.log(button);

button.addEventListener('click', Menu);

function Menu(){      
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
}

