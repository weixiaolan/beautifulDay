$(function(){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1:3000/header.html",
		success:function(res){
			$("#header-my").replaceWith(res)
		}
	})
})