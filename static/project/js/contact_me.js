function recaptchaCallback(){
  console.log('recaptchaCallback');
  $("#contactForm").submit();
}

function checkIfFormIsValid(email){
  if (email.length > 0 && !$("input#email").jqBootstrapValidation("hasErrors")) {
    $('div.g-recaptcha').show();
  } else {
    $('div.g-recaptcha').hide();
  }
}

$(function() {
  checkIfFormIsValid('');
  $("#contactForm input#email").on('input',function(e) {
    checkIfFormIsValid($(this).val());
  });

  $("#contactForm input").jqBootstrapValidation({
    preventSubmit: false,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },

    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var email = $("input#email").val();
      console.log(email);
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyiEimE87UeAELs7XEtDHsjBtlx58N-g4FxNTRs1p37Xldi1h0/exec?action=contact",
        type: "GET",
        data: {
          email: email
        },
        dataType: 'json',
        cache: false,
        success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>OK, Dzięki " + email + "!</strong></br> Powiadomimy Cię o rozpoczęciu kampanii.");
          $('#success > .alert-success')
            .append('</div>');

          //clear all fields
          $('#contactForm').trigger("reset");
          grecaptcha.reset();
          $('div.g-recaptcha').hide();
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Przepraszamy, serwer email nie odpowiada.</br>Prosze spróbować ponownie póżniej!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
