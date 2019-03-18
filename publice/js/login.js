/*定义用户名和密码框*/
var user = document.getElementById("user")
var upwd = document.getElementById("upwd")

/*绑定事件*/
user.onblur=function(){
	var span =this.nextElementSibling.children[0];
	if(this.value.search(/([a-z]|[A-Z]|\d){4,16}/)!=-1){
		span.innerHTML="用户名格式正确";	
		span.style.color="green";
	}else{
		span.innerHTML="用户名必须是4-16位，数字和字母组合";
		span.style.color="red";
	}
}

upwd.onblur=function(){
	var span =this.nextElementSibling.children[0];
	if(this.value.search(/([a-z]|[A-Z]|\d){6,12}/)!=-1){
		span.innerHTML="密码格式正确";	
		span.style.color="green";
	}else{
		span.innerHTML="密码必须是6-12位，数字和字母组合";
		span.style.color="red";
	}
}