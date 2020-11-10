const toggle0=document.getElementById("toggle0");
const toggle1=document.getElementById("toggle1");
const toggle2=document.getElementById("toggle2");
const password=document.getElementById("password");
const check=document.getElementById("check");
const button=document.getElementById("button");
const form1=document.getElementById("form1");
const confirmPassword=document.getElementById("confirmPassword");
const loginPassword=document.getElementById("loginPassword");
const   mail=document.getElementById("mail");
const loginButton=document.getElementById("loginButton");
function toggle(d)
{
    

    const fields=[password,confirmPassword,loginPassword];    
        const type=fields[d].type=="password"?"text":"password";
        fields[d].setAttribute('type',type);
        
        const eyefields=[toggle0,toggle1,toggle2];
        
              eyefields[d].classList.toggle('fa-eye-slash');
        

}






var checkit=function ()
{
    if(confirmPassword.value.length>0)
    {
        if(password.value!=confirmPassword.value)
        {
            check.innerHTML="Passwords donot Match!!!";
        }
        else
        {
                 check.innerHTML="Passwords Matching!";
                check.style.color='green';  
            
        }
    }
    
}

if(mail.value.length==0|| loginPassword.value.length==0)
{
    loginButton.style.backgroundImage="linear-gradient(45deg, grey, transparent)";
    loginButton.style.backgroundColor="grey"
    loginButton.disabled=true;
}
function buttonCheck()
{
    if(mail.value.length==0|| loginPassword.value.length==0)
{
    loginButton.style.backgroundImage="linear-gradient(45deg, grey, transparent)";
    loginButton.style.backgroundColor="grey"
    loginButton.disabled=true;
}
else
{
    loginButton.style.backgroundImage=" -webkit-linear-gradient(top, #3D94F6, #1E62D0)";
    loginButton.style.backgroundColor="blue"
    loginButton.disabled=false;
}
}
