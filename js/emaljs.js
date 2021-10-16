/* window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_bxj5u98", "template_y15dokg", this).then(
        function () {
          const form = document.getElementById("contact-form");
          form.reset();
          let SUCCESS = ` <p class="success">vooyah! Your Message has been send</p>`;
          let msg = document.createElement("div");
          msg.innerHTML = SUCCESS;
          form.appendChild(msg);
          setTimeout(() => {
            form.removeChild(msg);
          }, 5000);
          console.log("SUCCESS!");
        },
        function (error) {
          const form = document.getElementById("contact-form");
          let SUCCESS = ` <p class="success">Can't Deliver Your message 🙁</p>
          <a class="error" href="mailto:jojitthomas.info@gmail.com">report</a>`;
          let msg = document.createElement("div");
          msg.innerHTML = SUCCESS;
          form.appendChild(msg);
          setTimeout(() => {
            form.removeChild(msg);
          }, 5000);
          console.log("FAILED...", error);
        }
      );
    });
};
*/

$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbxg1517bpGg7U0gFLvOkyh1UaF-4VcX_z_sCC6ivFnJ_dthG1opvpmo4g0DuOm16o79/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})
