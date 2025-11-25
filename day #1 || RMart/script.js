const btn = document.getElementById("menu_hp");
const nav = document.getElementsByClassName("navbar2")[0];

if (btn && nav) {
    console.log("ada");
    
    btn.addEventListener("click", function() {
        if (nav.style.display === "none" || nav.style.display === "") {
            nav.style.display = "flex";
        } else {
            nav.style.display = "none";
        }
    });
}