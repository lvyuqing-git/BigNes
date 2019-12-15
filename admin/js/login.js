$(function(){

    $('.input_sub').on('click',function(e){
      e.preventDefault();
      let input_txt = $('.input_txt').val();
      let input_pass = $('.input_pass').val();

      if(input_txt.trim() == '' || input_pass.trim() ==''){
        alert('用户名或密码不能为空');
        return ;
      }
      $.ajax({
        url : bigNes.user_login,
        type : 'post',
        data : {
          username : input_txt,
          password : input_pass,
        },
        success : function(res){
          console.log(res);
          localStorage.setItem('token',res.token);
          location.href = './index.html'
        }
      }); 
      
        
    });


});