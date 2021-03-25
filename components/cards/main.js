var carddropdownlist = document.getElementById("card-dropdown-content");
var list = carddropdownlist.querySelectorAll("label");
var cardtitle = document.querySelectorAll(".dropbtn");
var droparrow = document.getElementsByClassName("card-dropdown-arrow");
var rot = 180;
var accCarddropdownlist = document.getElementById(
  "account-card-dropdown-content"
);
var accList = accCarddropdownlist.querySelectorAll("label");
var accCardtitle = document.querySelectorAll(".account-dropbtn");

/* Alarm Dropdown */
function dropFunction() {
  document.getElementById("card-dropdown-content").classList.toggle("show");
  document
    .getElementById("card-dropdown-arrow")
    .classList.toggle("card-arrow-rotate");
}

window.onclick = function (event) {
  if (
    !event.target.matches(".card-content") &&
    !event.target.matches(".dropbtn") &&
    !event.target.matches(".card-dropdown-arrow")
  ) {
    var dropdowns = document.getElementsByClassName("card-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        document
          .getElementById("card-dropdown-arrow")
          .classList.toggle("card-arrow-rotate");
      }
    }
  }
};

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    cardtitle[0].innerHTML = list[i].innerHTML;
  });
}

/* Account Dropdown */
function accdropFunction() {
  document
    .getElementById("account-card-dropdown-content")
    .classList.toggle("account-show");
  document
    .getElementById("account-card-dropdown-arrow")
    .classList.toggle("account-arrow-rotate");
}

window.onclick = function (event) {
  if (!event.target.matches(".account-card-content")) {
    var dropdowns = document.getElementsByClassName(
      "account-card-dropdown-content"
    );
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var accOpenDropdown = dropdowns[i];
      if (accOpenDropdown.classList.contains("account-show")) {
        document
          .getElementById("account-card-dropdown-arrow")
          .classList.remove("account-show");
      }
    }
  }
};

/* Check all checkboxes */
function toggle(source) {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] != source) checkboxes[i].checked = source.checked;
  }
}
