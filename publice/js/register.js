var phone=document.getElementById("phone")

phone.onblur=function(){
	var span=this.parentElement.nextElementSibling.children[0]
	if(this.value.search(/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/)!=-1){
		span.innerHTML="手机号格式正确";	
		span.style.color="green";
	}else{
		span.innerHTML="手机号格式不正确";
		span.style.color="red";
	}
}
