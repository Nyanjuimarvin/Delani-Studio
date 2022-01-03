$(document).ready(() => {
  
//Show description text
  $(".service").click(function () {
    $(this).hide();
    $(this).next().toggle();
  });

//Show description icons
  $(".message").click(function () {
    $(this).hide();
    $(this).prev().toggle();
  });

//Hover method for portfolio section
  $(".under").hover(handleMouseEnter, handleMouseLeave);

  function handleMouseEnter(e) {
    $(this).children(".overlay").show();
  }

  function handleMouseLeave(e) {
    $(this).children(".overlay").hide();
  }
});


//Business logic
const form = document.querySelector("form");
const userName = form.elements.name;
const email = form.elements.email;
const message = form.elements.message;

$(form).on('submit',(e) =>{
  alert(`Hey ${userName.value.trim()}. We have received your message.Thank you for reaching out`)
  e.preventDefault();
  form.reset();
})
//Mailchimp
