$(document).ready(function() {
  $nameInput = $("#name_input");
  $emailInput = $("#email_input");
  $messageInput = $("#message_input");
  $numberInput = $("#number_input");

  $("#form_button").click(function() {
    let name = $nameInput.val();
    let email = $emailInput.val();
    let number = $numberInput.val();
    let message = $messageInput.val();
    var errors = [];
    if (name === "" || name.length <= 0) {
      errors.push("Name is required");
    }
    if (email === "" || email.length <= 0) {
      errors.push("Name is required");
    }
    if (message === "" || message.length <= 0) {
      if (number === "" || number.length <= 0) {
        errors.push("You send either your Number or Email or both.");
      }
    }

    if (errors.count > 0) {
      alert(errors[0]);
    } else {
      var param = {
        name: name,
        email: email,
        message: message,
        number: number
      };
      $.ajax({
        type: "POST",
        url:
          "https://script.google.com/macros/s/AKfycby9KB8tFjuvM5jTXdtILpLLHlMKO5erEpl04UYckeCav226IX0/exec",
        crossDomain: true,
        SameSite: "none",
        data: JSON.stringify(param),
        dataType: "jsonp",
        async: false,
        beforeSend: function(xhr) {
          xhr.setRequestHeader(
            "Authorization",
            make_base_auth("alingasadan@gmail.com", "diehardwarrior30")
          );
        },
        success: function(response) {
          //   if (response == "success") {
          //     alert("Message sent");
          //     location.herf = "";
          //   } else {
          //     alert(response.Message);
          //   }
          alert(response);
        },
        failure: function(response) {
          alert(response.responseText);
        },
        error: function(response) {
          alert(response.responseText);
        }
      });
    }
  });

  function make_base_auth(user, password) {
    var tok = user + ":" + password;
    var hash = btoa(tok);
    return "Basic " + hash;
  }

  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function() {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("header").style.boxShadow = "0 4px 2px -2px gray";
  //   } else {
  //     document.getElementById("header").style.boxShadow = "0 0px opx -0px gray";
  //   }
  //   prevScrollpos = currentScrollPos;
  // };
  // window.onscroll = function() {
  //   scrollFunction();
  // };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 100 ||
  //     document.documentElement.scrollTop > 100
  //   ) {
  //     document.getElementById("header").style.boxShadow = "0 4px 2px -2px gray";
  //     /* box-shadow: 0 4px 2px -2px gray; */
  //     //alert("hey");
  //   } else {
  //     //document.getElementById("header").style.fontSize = "90px";
  //     document.getElementById("header").style.boxShadow = "0 0px opx -0px gray";
  //   }
  // }
});
