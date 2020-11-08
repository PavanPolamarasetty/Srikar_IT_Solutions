const togglePassword=document.getElementById("toggle");
const password=document.getElementById("password");
const check=document.getElementById("check");
const button=document.getElementById("button");
const form1=document.getElementById("form1");
togglePassword.addEventListener('click',function(e){

    const type=password.getAttribute('type')==='password'?'text':'password';

    
    password.setAttribute('type',type);

    this.classList.toggle('fa-eye-slash');

});

const confirmPassword=document.getElementById("confirmPassword");


button.addEventListener('click',function () {
    
        button.setAttribute('type','button');
        if (password.value!= confirmPassword.value) {
            
            
            check.textContent = "Passwords donot Match!!!";
            
        }
        else
        {
            button.setAttribute('type','submit');
            form1.setAttribute('action',"regsuccess.html");

        }
    });
