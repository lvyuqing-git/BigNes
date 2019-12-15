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
            $('.user_info img,.user_center_link img').attr('src',res.data.userPic);
            $('.user_info span').html('欢迎&nbsp;&nbsp;'+res.data.nickname);
        }
    });

    $('.level01').on('click',function(){
        
    });

});