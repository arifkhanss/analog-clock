
document.querySelector(".click").addEventListener("click",function(){
  var fname=document.querySelector(".fname").value;
  var lname=document.querySelector(".lname").value;
  var email=document.querySelector(".email").value;
  var password=document.querySelector(".passwords").value;
var age=document.querySelector(".old").value;

if(fname=="" && lname=="" && email=="" && password==""){
  document.querySelector(".fnames").style.opacity="1";
  document.querySelector(".lnames").style.opacity="1";
  document.querySelector(".emails").style.opacity="1";
  document.querySelector(".psw").style.opacity="1";

}


else if(lname=="" && email=="" && password==""){
  document.querySelector(".lnames").style.opacity="1";
  document.querySelector(".emails").style.opacity="1";
  document.querySelector(".psw").style.opacity="1";
}


else if(fname=="" && email=="" && password==""){
  document.querySelector(".fnames").style.opacity="1";
  document.querySelector(".emails").style.opacity="1";
  document.querySelector(".psw").style.opacity="1";
}


else if(fname=="" && lname=="" && password==""){
  document.querySelector(".fnames").style.opacity="1";
  document.querySelector(".lnames").style.opacity="1";
  document.querySelector(".psw").style.opacity="1";
}


else if(fname=="" && email=="" && lname==""){
  document.querySelector(".fnames").style.opacity="1";
  document.querySelector(".emails").style.opacity="1";
  document.querySelector(".lnames").style.opacity="1";
}


  else if(fname=="" && lname==""){
    document.querySelector(".fnames").style.opacity="1";
    document.querySelector(".lnames").style.opacity="1";
  }

  else if(fname=="" && email==""){
    document.querySelector(".fnames").style.opacity="1";
    document.querySelector(".emails").style.opacity="1";
  }
  else if(fname=="" && password==""){
    document.querySelector(".fnames").style.opacity="1";
    document.querySelector(".psw").style.opacity="1";
  }


  else if(email=="" && lname==""){
    document.querySelector(".emails").style.opacity="1";
    document.querySelector(".lnames").style.opacity="1";
  }

  else if(password=="" && lname==""){
    document.querySelector(".fnames").style.opacity="1";
    document.querySelector(".psw").style.opacity="1";
  }


  else if(email=="" && password==""){
    document.querySelector(".emails").style.opacity="1";
    document.querySelector(".psw").style.opacity="1";
  }


else if(fname==""){
  document.querySelector(".fnames").style.opacity="1";
}
else if(lname==""){
  document.querySelector(".lnames").style.opacity="1";
}
else if(email==""){
  document.querySelector(".emails").style.opacity="1";
}
else if(password==""){
  document.querySelector(".psw").style.opacity="1";
}



if(age<18 || age>35){
  document.querySelector(".ages").style.opacity="1"
}








})


document.querySelector("#count").addEventListener("change",function(){

var countryvalue=document.querySelector("#count").value;

if(countryvalue=="bd"){
  document.querySelector(".bddivition").style.display="block"
}else{
  document.querySelector(".bddivition").style.display="none";
}


})


//rajshahi
document.querySelector("#bddi").addEventListener("change",function(){
var divitionValue=document.querySelector("#bddi").value;
if(divitionValue=="rj"){
  document.querySelector(".rajshahidodict").style.display="block"
}else {
  document.querySelector(".rajshahidodict").style.display="none"
}

})


////mpymonsing



document.querySelector("#bddi").addEventListener("change",function(){
var divitionValue=document.querySelector("#bddi").value;
if(divitionValue=="mn"){
  document.querySelector(".mymonsingDisct").style.display="block"
}else {
  document.querySelector(".mymonsingDisct").style.display="none"
}

})





//Sylet


document.querySelector("#bddi").addEventListener("change",function(){
var divitionValue=document.querySelector("#bddi").value;
if(divitionValue=="sy"){
  document.querySelector(".Sylet").style.display="block"
}else {
  document.querySelector(".Sylet").style.display="none"
}

})
