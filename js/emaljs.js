function validation(valid) {
  console.log(valid);
  if (valid === true) {
    $("#contactForm").submit((e) => {
      e.preventDefault()
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxg1517bpGg7U0gFLvOkyh1UaF-4VcX_z_sCC6ivFnJ_dthG1opvpmo4g0DuOm16o79/exec",
        data: $("#contactForm").serialize(),
        method: "POST",
        success: function (response) {

          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
        },
        error: function (err) {
          alert("Something Error")

        }
      })
    })
  }
  else {
    alert("Captcha Wrong")
  }
}

