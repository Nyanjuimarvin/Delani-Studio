//Business logic
const form = document.querySelector("form");
const userName = form.elements.name;
const email = form.elements.email;
const message = form.elements.message;

$(document).ready(() => {
  $(email).on("mouseover", () => {
    alert("HEY");
  });
  $(".under").hover(handleMouseEnter, handleMouseLeave);
  function handleMouseEnter(e) {
    $(this).show(".overlay");
  }
  function handleMouseLeave(e) {
    $(this).hide(".overlay");
  }
});
const classList = document.getElementsByClassName("under");
const classList1 = document.getElementsByClassName("overlay");
