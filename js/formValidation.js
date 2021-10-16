$(document).ready(function(){
    $("#contactForm").validate({
        rules:{
            userName:{
                required:true,
                minlength:4
            },
            userEmail:{
                required:true,
                email:true,
            },
            contactNumber:{
                required:true,
                number:true,
                minlength:10,
                maxlength:10
            },
            message:{
                required:true,
                minlength:10,
                maxlength:200
            },
            captcha:{
                required:true,
                minlength:6
            }
        },
        messages:{
            userName:{
                minlength:"Please Enter Your Full Name"
            },
            userEmail:{
                email:"Please enter a valid Email id"
            },
            contactNumber:{
                minlength:"Please enter a valid contact number",
                maxlength:"Please enter a valid contact number"
            },
            message:{
                minlength:"Its too short! minimum 10 characters",
                maxlength:"Oh no! it's too large"
            },
            captcha:{
                minlength:"Captcha is wrong"
            }
        }
    })

})
