(function (w) {
    let basics = 'http://localhost:8080/api/v1';//基地址
    let bigNes = {
        basics: basics,
        user_login: basics + '/admin/user/login',//用户登录
        user_info: basics + '/admin/user/info',//获取用户信息
    }

    //暴露接口
    w.bigNes = bigNes;

})(window);