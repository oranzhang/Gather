$("#username").blur(function(){
    checkInput("#username",!$(this).val());
});
$("#password").blur(function(){
    checkInput("#password",!$(this).val());
});
$("#username-t").hide();
$("#password-t").hide();
$("#login").click(function(){
    readySubmit=true;
    $("#username").blur();
    $("#password").blur();
    if(!readySubmit)
        return false;
    $.post("/login",{_xsrf:$("input[name='_xsrf']").val(),
            username:$("#username").val(),
            password:$("#password").val()},
        function(data){
            if(data.status=="success")
                location.href="/";
            else
                alert(data.message);
        },"json");
    return false;
});