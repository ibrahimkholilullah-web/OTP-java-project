let generateOpp;

const otpExpair = document.getElementById("otp-exprice-id");
function expriceOpt(){
    const totalTime = 15000;
    const interval = 1000;
    let slice = totalTime / interval;

    const inivId = setInterval(function(){
        otpExpair.innerText = `OTP Will expair in ${slice} secound`;
        slice = slice-1;
    }, interval);

    setTimeout(function(){
        otpExpair.innerText = "OTP Expair"
        clearInterval(inivId);
        generatOtp();
    }, totalTime);
}

function takelOtpBoxer(){
    const boxer = document.getElementById('otp-box-list-id');
    boxer.addEventListener("input", function(e){
        const target = e.target;
        const value = target.value;

        if(isNaN(value)){
            target.value = "";
            return;
        }

        const nextElement = target.nextElementSibling;

        if(nextElement){
            nextElement.focus();
        }
        validateOTP();
    });
   
  
}


function generatOtp(){
      generateOpp = Math.floor(1000 + Math.random() *9000);
const optElement = document.getElementById("geenerated-otp-id");
optElement.innerHTML = ` Your OTP : ${generateOpp}`;
expriceOpt();
}

function validateOTP(){
    let typedNumber = "";
    const boxListElement = document.getElementById("otp-box-list-id");
    [...boxListElement.children].forEach((elem) => {
        typedNumber = typedNumber + elem.value;
    });
    console.log(typedNumber);

    const result = (generateOpp === parseInt(typedNumber, 10));
    const resultElem = document.getElementById("result-id");

    if(result){
        resultElem.innerText ="OPT has been Validate Successfully.";
        resultElem.classList.remove("fail");
        resultElem.classList.add("success");
    }else{
        resultElem.innerText = "OPT is Invalid.";
        resultElem.classList.remove("success");
        resultElem.classList.add("fail");
    }
}

function init(){
    console.log('JavaScript initialization done!!!');
    takelOtpBoxer();
    setTimeout (generatOtp, 2000);
}
init();