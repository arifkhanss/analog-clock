function myclock(){
  var sechand=document.querySelector(".sen-hand").style;
  var minhand=document.querySelector(".min-hand").style;
  var hrhand=document.querySelector(".hr-hand").style;

var date=new Date();
var hr=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();

sechand.transform="rotate("+sec*6+"deg)";
minhand.transform="rotate("+min*6+"deg)";
hrhand.transform="rotate("+(hr*30+min*.5)+"deg)";


}
setInterval(function(){
myclock()

},1000)
