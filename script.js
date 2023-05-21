/*Dark Mode function*/

function changeCSS(){
    var theme = document.getElementById("theme");
    var themeName = theme.getAttribute("href");
    if(themeName == "style.css"){
        theme.setAttribute("href", "dark.css");
        localStorage.setItem("theme", "dark");
    }
    else{
        theme.setAttribute("href", "style.css");
        localStorage.setItem("theme", "light");
    }
}

/*Dark mode to work across all pages*/
var savedTheme = localStorage.getItem("theme");
if(savedTheme === "dark"){
    document.getElementById("theme").setAttribute("href", "dark.css");
}