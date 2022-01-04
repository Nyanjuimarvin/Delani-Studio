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

$(form).on("submit", (e) => {
  storeUserMessage();
  alert(
    `Hey ${userName.value.trim()}. We have received your message.Thank you for reaching out`
  );
  e.preventDefault();
  form.reset();
});

//Try getting and posting messages with Axios

const storeUserMessage = async () =>{
  const userData = {
    userEmail   : email.value,
    userMessage : message.value
  }
  try{
    const config = { headers: {Accept : 'application/json'}};
    const res = await axios.post('https://end6h18ogxroegq.m.pipedream.net',JSON.stringify(userData),config);
    console.log(res.config.data)
  }catch(e){
    console.log("ERROR!!",e);
  }
}