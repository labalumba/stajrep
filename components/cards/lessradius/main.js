var cardtitle = document.querySelectorAll(".dropbtn");
var droparrow = document.getElementsByClassName("card-dropdown-arrow");
var rot = 180;
var accCarddropdownlist = document.getElementById(
  "account-card-dropdown-content"
);
var accList = accCarddropdownlist.querySelectorAll("label");
var accCardtitle = document.querySelectorAll(".account-dropbtn");

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
  if (
    !event.target.matches(".account-card-content") &&
    !event.target.matches(".account-dropbtn") &&
    !event.target.matches(".account-card-dropdown-arrow")
  ) {
    var dropdowns = document.getElementsByClassName(
      "account-card-dropdown-content"
    );

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var accOpenDropdown = dropdowns[i];
      if (accOpenDropdown.classList.contains("account-show")) {
        accOpenDropdown.classList.remove("account-show");
        document
          .getElementById("account-card-dropdown-arrow")
          .classList.toggle("account-arrow-rotate");
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
