$(function() {
    //重置
    $('.main-btn').click(function() {
        location.href = 'Resume.html';
        //		$('.content').css({'display':'block'});
    })

    //显隐控制
    if ($('.content').css('display') == 'block') {
        $('.content').css({ 'background': '#eee' });
        $('.part-box').eq(0).css({ 'background': '#75D4DA' });
        $('.part-box').eq(1).css({ 'background': '#F16060' });
        $('.part-box').eq(2).css({ 'background': '#FBBA4A' });
        $('.part-box').eq(3).css({ 'background': '#64F378' });
    }
    $('.switch').click(function() {
        $('.content').fadeToggle(1000);
        if ($('.content').css('display') == 'block') {
            $('.content').css({ 'background': '#eee' });
            $('.part-box').eq(0).css({ 'background': '#75D4DA' });
            $('.part-box').eq(1).css({ 'background': '#F16060' });
            $('.part-box').eq(2).css({ 'background': '#FBBA4A' });
            $('.part-box').eq(3).css({ 'background': '#64F378' });
        }
    })

    //头像替换
    $(".photo>img").hover(function() {
        $(this).prop({ 'src': 'img/2.jpg' });
    }, function() {
        $(this).prop({ 'src': 'img/1.jpg' });
    });

    //ajax转页面
    $('.part-box').eq(0).click(function() {
        $('.content').load('education.html');
    })
    $('.part-box').eq(1).click(function() {
        $('.content').load('skill.html');
    })
    $('.part-box').eq(2).click(function() {
        $('.content').load('recommend.html');
    })
})