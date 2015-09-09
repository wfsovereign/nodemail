/**
 * Created by shining3d-fyqj on 15/9/9.
 */



$(function (){
    $('.sign-up').on('click',function (){
        console.log('in');
        var email = $('input[type="text"]').val();
        $.post('/signup',{email:email},function (data){
            console.log(data);
            alert(data.status);
        });

    });
});