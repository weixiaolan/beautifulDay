$(function(){
	var $ul=$("#main div.banner div.menu div.column>div>ul")
	$ul.on("click","a",function(e){
		e.preventDefault()
		var $a=$(this)
		var $i=$a.parent().index()
		var $div=$("#main div.menu_item")
		
		console.log($i)
		if($i==0){
			$div.children("div.lxwm")
				.css("display","flex")
				.siblings()
				.css("display","none")
		}
		if($i==1){
			$div.children("div.MessageBoard")
				.css("display","block")
				.siblings()
				.css("display","none")
		}
		if($i==2){
			$div.children("div.recruit")
				.css("display","block")
				.siblings()
				.css("display","none")
		}
		$a.addClass("active").parent().siblings().children().removeClass("active")
	})
})