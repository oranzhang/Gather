var speech_fake=function() {
    var a=$('#wmd-input');
    var t=$('#markdown-commands input')
    a.val(a.val()+t.val());
    t.blur();
    a.focusEnd();
};

if(isChrome){
    $('#markdown-commands').html($('#markdown-commands').html() + '<div class="right"><input id="wmd-input_speech" class="btn" x-webkit-speech onwebkitspeechchange="speech_fake();" onclick="this.blur();" lang="zh-CN"/></div>');
    $('#markdown-commands input').blur(function(){
      this.value="";
    });
}
$("#wmd-input").blur(function(){
    $.post("/markdown",{_xsrf:$("input[name='_xsrf']").val(),
            md:$("#wmd-input").val()},
        function(data){
            $("#md-preview").html(data);
        });
});
document.onkeyup=function(event) {
    if(window.ActiveXObject) {
        var keydown = window.event.keyCode;
        event=window.event;
    }else{
        var keydown = event.keyCode;
        if(event.ctrlKey && keydown == 13){
            $('#submit').click();
        }
    }
};