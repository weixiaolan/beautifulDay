// 点击我则移除我兄弟之间的class
//企业概况
$(function(){
    // 刷新后还停留在本页
    // window.location.reload()
$(".nva-ul").click(function(e){
    console.log("你好");
    e.preventDefault();
    var itme=$(e.target);
    var i=itme.index();
    var i=`.content${i}`;
    console.log("第一次i"+i);
    console.log(i);
    $(i).css('display','block').siblings().css('display','none');
    if(e.target.nodeName=="LI"){
    itme.addClass("shadow-div").siblings().removeClass("shadow-div");


        var i=`${i}`;
        console.log("look");
        console.log("第二次i"+i)
        var iTitile=`${i}-title`;


        $(iTitile).addClass("show-title").siblings().removeClass("show-title");
        //头部文字问题

        // $(".content-title").fadeIn("slow");
        // console.log("ce");
    }else{
       itme.parent().parent().addClass("shadow-div").siblings().removeClass("shadow-div").index();
        var itme=$(e.target);
        var i=itme.parent().parent().index();
        console.log(i);
        var i=`.content${i}`;
        var iTitile=`${i}-title`;
        $(i).css('display','block').siblings().css('display','none');
        console.log("完成");
        $(iTitile).addClass("show-title").siblings().removeClass("show-title");
       console.log("最后的数据"+i);
        $(i).css('display','block').siblings().css('display','none');
     //
     // var i=itme.parent().parent().index();
     // console.log(i);
    }
    console.log(e.target.nodeName);

    // var i=itme.index();
})
    //轮播图
    // 左边按钮
$(".left-button").click(function(){
    var value=$(".move").css("left");

    var value=parseInt(value);
    var lilength=$(".lengthli").children().length;
     var ccc=-(lilength-4)*249;
    console.log("我移动了多少:"+ccc);


    // console.log("移动后的距离:"+value);
    if(value>ccc){
        console.log("当前位置"+value);

        var add=-1*294;
        value=value+add;
        console.log(value);
        $(".move").css("left",value);
    }
})
 // 右边按钮
    $(".right-button").click(function(){

        var value=$(".move").css("left");
        var value=parseInt(value);
        if(value<0){
        var value=parseInt(value);
        console.log("当前位置"+value);

        var add=1*294;
        value=value+add;
        console.log(value);
        $(".move").css("left",value);
        }
        // console.log("移动后的距离:"+value);
    })
// 更换图片路径

$(".Getfocus").mouseover(function(e){
    if(e.target.nodeName=="IMG"){
    console.log("你好");
     var  img_url =$(e.target).attr('src');

    // $(".img-trophy img").attr("src");
    $(".img-trophy img").attr('src',img_url);
    console.log();
    }
})
//
    console.log("测试外");
});

