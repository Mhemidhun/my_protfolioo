/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


$("#submit-form").validate({
    rules: {
        username: {
            pattern: /^[a-zA-Z ]+$/
        },
        phone: {
            pattern: /^\+?[1-9][0-9]{9}$/
        }

    },
    submitHandler: function (form) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwujSMgzyILaQPqCeCaNkVikiFN4DVLDqRcBgnRdmKXjvu0KSMsK4p8duveYDISCB3F/exec",
            data: $(form).serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                form.reset();
                window.location.reload()
            },
            error: function (err) {
                alert("Something Error")
            }
        })

    }
})