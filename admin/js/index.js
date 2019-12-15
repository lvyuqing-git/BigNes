$(function () {

    //未登录显示模态框
    $('.modal').on('hidden.bs.modal', function (e) {
        location.href = './login.html'
    })
    //获取用户信息
    $.ajax({
        url: bigNes.user_info,
        type: 'get',
        success: function (res) {
            $('.user_info img,.user_center_link img').attr('src', res.data.userPic);
            $('.user_info span').html('欢迎&nbsp;&nbsp;' + res.data.nickname);
        }
    });
    //一级标题点击样式添加,二级页面展开
    $('.level01').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.level02 li').removeClass('active')
        if ($(this).next().hasClass('level02')) {
            $('.level02').slideToggle();
            $('.level02 li').first().click();
        }
    });
    //二级标题点击演示添加
    $('.level02 li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active');
      
    });
    


});