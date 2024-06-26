function openNav() {
    document.getElementById("mobile-nav").style.display = "block";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.getElementById("close").style.transition = "display 0.50s";
}

function closeNav() {
    document.getElementById("mobile-nav").style.display = "none";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.transition = "display 0.50s";
}


function mobileClose() {
    document.getElementById("mobile-nav").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "block";
}

var date = new Date();
var c_year = date.getFullYear();
// console.log("Year "+c_year);
document.getElementById("date").innerText=c_year;

function drop() {
    document.getElementById("drop-down").style.display = "block";
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("drop");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}