// let tablinks = document.getElementsByClassName("tab-links");
// let tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//   for (tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }

//   for (tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   document.addEventListener.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab");
// }

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var navlist = document.getElementById("navlist");

function openmenu() {
  navlist.style.right = "0";
}
function closemenu() {
  navlist.style.right = "-200px";
}

// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
// While var and let can be declared without being initialized, const must be initialized during declaration.
