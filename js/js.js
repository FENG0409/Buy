// 首页跳轉登入頁面
function login(){
	var x;
	var r=$('#index_pop').css('display','block');
	if (r==true){
		
	}
	else{
		x="你按下了\"取消\"按钮!";
	}
}

$('.btn_close').click(function(){
    $('#index_pop').css('display','none')
})

// 登出頁面
$('#signout').click(function(){
    $('#signout_pop').css('display','block')
})


//登入頁面banner
$(function () {
    var slider = $('#scrollPics .slider');
    var imgCon = $('#scrollPics .slider li');  //獲取圖片
    imgCon.not(imgCon.eq(0)).hide();  //除第一張其它隱藏
    var num = $('#scrollPics .num'); //定義頁碼
    var len = slider.find('li').length;
    var html_page = '', index = 0;

    //新增頁碼

    for (var i = 0; i < len; i++) {
        if (i === 0) {
            html_page += '<li class=on >' + (i + 1) + '</li>';
        } else {
            html_page += '<li>' + (i + 1) + '</li>';
        }
    }
    num.html(html_page);

    num.html(html_page);
    //顯示索引對應的圖片
    function showPic(index) {
        imgCon.eq(index).show().siblings("li").hide();
        num.find("li").eq(index).addClass('on').siblings("li").removeClass("on");
    }

    //頁碼按鈕移入
    $('.num li').mouseover(function () {
        index = $(this).index();   //獲取索引
        showPic(index);
    })

    $('#scrollPics').hover(function () {
        clearInterval(window.timer);
    }, function () {
        window.timer = setInterval(function () {
            showPic(index);
            index++;
            if (index === len) {
                index = 0;
            }
        }, 2000);
    }).trigger('mouseleave');     //觸發被選元素的指定事件
});


//闗閉 banner
$('.banner_btn_second').click(function(){
    $('#pop_banner').css('display','none')
})


//商品分類
$('#productbtn').click(function(){
    $('#producttype').css('display','block')
})

$('.producttype_close').click(function(){
    $('#producttype').css('display','none')
})

$('.producttype_sure').click(function(){
    $('#producttype').css('display','none')
})

//訊息内容
$('#bulletinplatform_btn').click(function(){
    $('#newsplatform').css('display','block')
})

$('.newsplatform_btn').click(function(){
    $('#newsplatform').css('display','none')
})

//修改密码
$('#passwordbtn').click(function(){
    $('#changepassword').css('display','block')
})

$('.changepassword_close').click(function(){
    $('#changepassword').css('display','none')
})

$('.changepassword_sure').click(function(){
    $('#changepassword').css('display','none')
})

//提交(空白的話)
$('#settle_btn').click(function(){
    $('#send_pop').css('display','block')
})

$('.send_btn').click(function(){
    $('#send_pop').css('display','none')
})