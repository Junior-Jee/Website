function toggleMenu() {
    var navbar = document.getElementById("myNavbar");
    var icon = document.querySelector(".navbar .icon");
    
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
      icon.innerHTML = "&times;";
    } else {
      navbar.className = "navbar";
      icon.innerHTML = "&#9776;";
    }
  }
  