$(function(){
	
	
	
	
	
	
	
	
	
	
	
	var $ul=$("#main .banner>div>div.column>div>ul")
	var $div=$("div.summary>div.nav")
	$ul.on("click","a",function(e){
		e.preventDefault()
		var $a=$(this)
		var $i=$a.parent().index()
		var $max=$a.parent().parent().children().length-1
		if($i!=0&&$i!=$max){
			$a.addClass("active")
				.parent().siblings()
				.children("a").removeClass("active")
			if($i==1) {
				$div.children("div.yft").css("display","flex")
				.siblings()
				.css("display","none")
				.first()
				.css("display","block")
				.siblings()
				.last()
				.css("display","block")
			}
			if($i==2) {
				
				$div.children("div.yfg").css("display","flex")
				.siblings()
				.css("display","none")
				.first()
				.css("display","block")
				.siblings()
				.last()
				.css("display","block")
			}
			if($i==3) {
				$div.children("div.aty").css("display","flex")
				.siblings()
				.css("display","none")
				.first()
				.css("display","block")
				.siblings()
				.last()
				.css("display","block")
			}
		}
		
		console.log()
	})
})
