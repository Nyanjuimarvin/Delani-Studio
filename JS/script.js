//Business logic
const form = document.querySelector("form");
const userName = form.elements.name;
const email = form.elements.email;
const message = form.elements.message;
//const hideSeek = document.getElementsByClassName("overlay");
//const ufd = document.getElementsByClassName("under");

$(document).ready(() => {
  $(email).on("mouseover", () => {
    alert("HEY");
  });
  $(".under").on("mouseover", () => {
    var classArray = document.getElementsByClassName("overlay"); 
    $(classArray).forEach(() => {
      $(classArray).show();
    });
  });
});
