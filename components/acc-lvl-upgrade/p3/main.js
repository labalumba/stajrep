function toggleLevel() {
  const lvl1Overlay = document.getElementsByClassName("acc-lvl1-overlay");
  const lvl2Overlay = document.getElementsByClassName("acc-lvl2-overlay");
  const lvl3Overlay = document.getElementsByClassName("acc-lvl3-overlay");
  const lvl1border = document.getElementsByClassName("level1");
  const lvl2border = document.getElementsByClassName("level2");
  const lvl3border = document.getElementsByClassName("level3");
  const rbs = document.querySelectorAll('input[name="levels"]');
  let selectedValue;
  for (const rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  }
  console.log(lvl1border);

  if (selectedValue == "level1") {
    for (var i = 0; i < lvl1Overlay.length; i++) {
      lvl1Overlay[i].classList.add("acc-lvl-overlay-show");
      lvl2Overlay[i].classList.remove("acc-lvl-overlay-show");
      lvl3Overlay[i].classList.remove("acc-lvl-overlay-show");
    }
    for (var i = 0; i < lvl1border.length; i++) {
      lvl1border[i].classList.add("acc-lvl-border-highlight");
      lvl2border[i].classList.add("acc-lvl-border-highlight");
      lvl3border[i].classList.remove("acc-lvl-border-highlight");
      lvl3border[i].classList.remove("acc-lvl-border-highlight-lvl3");
    }
  } else if (selectedValue == "level2") {
    for (var i = 0; i < lvl2Overlay.length; i++) {
      lvl2Overlay[i].classList.add("acc-lvl-overlay-show");
      lvl1Overlay[i].classList.remove("acc-lvl-overlay-show");
      lvl3Overlay[i].classList.remove("acc-lvl-overlay-show");
    }
    for (var i = 0; i < lvl2border.length; i++) {
      lvl2border[i].classList.add("acc-lvl-border-highlight");
      lvl3border[i].classList.add("acc-lvl-border-highlight");
      lvl1border[i].classList.remove("acc-lvl-border-highlight");
      lvl2border[i].classList.add("acc-lvl-border-highlight-lvl3");
    }
  } else if (selectedValue == "level3") {
    for (var i = 0; i < lvl3Overlay.length; i++) {
      lvl3Overlay[i].classList.add("acc-lvl-overlay-show");
      lvl1Overlay[i].classList.remove("acc-lvl-overlay-show");
      lvl2Overlay[i].classList.remove("acc-lvl-overlay-show");
    }
    for (var i = 0; i < lvl3border.length; i++) {
      lvl3border[i].classList.add("acc-lvl-border-highlight");
      lvl3border[i].classList.add("acc-lvl-border-highlight-lvl3");
      lvl1border[i].classList.remove("acc-lvl-border-highlight");
      lvl2border[i].classList.remove("acc-lvl-border-highlight");
    }
  }
}
