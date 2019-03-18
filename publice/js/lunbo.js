var first=document.getElementById("lunbo");
var leftButton=first.previousElementSibling;
var rightButton=first.nextElementSibling.nextElementSibling;
var lunboFirst=first.firstElementChild;
var lunboCenter=lunboFirst.nextElementSibling;
var lunboLast=first.lastElementChild;
var d1,d2,d3;
var tiao=(()=>{
	lunboFirst.setAttribute("class",d1);
	lunboCenter.setAttribute("class",d2);
	lunboLast.setAttribute("class",d3);
})
//把函数赋值给定时
var dingshi=(function(){
	if(lunboFirst.className=="lunboFirst"&&lunboCenter.className=="lunboCenter"){
		d1="lunboCenter",d2="lunboLast",d3="lunboFirst";
		tiao();
	}
	else if(lunboFirst.className=="lunboCenter"&&lunboCenter.className=="lunboLast"){
		d1="lunboLast";d2="lunboFirst";d3="lunboCenter";
		tiao();
	}else{
		d1="lunboFirst";d2="lunboCenter",d3="lunboLast";
		tiao();
	}
	dang.onmouseover=function(){clearInterval(timer)};
	dang.onmouseout=function(){timer=setInterval(dingshi,3000)};
})
//给dingshi添加定时器效果实现轮播
var timer=setInterval(dingshi,3000);
var dang=document.getElementById("dang");



//实现左侧点击
leftButton.onclick=(()=>{
	if(lunboFirst.className=="lunboFirst"&&lunboCenter.className=="lunboCenter"){
		d1="lunboLast",d2="lunboFirst",d3="lunboCenter";
		tiao();
	}
	else if(lunboFirst.className=="lunboLast"&&lunboCenter.className=="lunboFirst"){
		d1="lunboCenter";d2="lunboLast";d3="lunboFirst";
		tiao();
	}else{
		d1="lunboFirst";d2="lunboCenter",d3="lunboLast";
		tiao();
	}
})
//调用被赋值的函数名dingshi实现右侧点击
rightButton.onclick=dingshi;

