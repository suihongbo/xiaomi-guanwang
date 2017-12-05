/**
 * Created by mac on 2017/12/3.
 */
//文本框
$(function () {
    $('#inputSearch').on('focus',function () {
        if($(this).val() == this.defaultValue) {
            $(this).val('');
        }
    }).on('blur',function () {
        if($(this).val() == ''){
            $(this).val(this.defaultValue)
        }
    }).keyup(function (e) {
        if(e.which == 13){
            alert('表单提交成功！');
        }
    })
});

//网页换肤
$(function () {
    $('#skin li').on('click',function () {
        changeSkin($(this).attr('id'));
    });
    if($.cookie('mySetSkin')){
        changeSkin($.cookie('mySetSkin'));
    }
    function changeSkin(skin) {
        // var  $skin = $(this).attr('id');
        $('#'+skin).attr('class','selected').siblings().removeClass('selected');
        $('#cssfile').attr('href','stylesMyshop/skin/'+skin+'.css');
        $.cookie('mySetSkin',skin, { path: '/', expires: 10 });
    }
})
//导航划过显示
$(function () {
    $('.nav li').hover(function () {
        $(this).find('div').show();
    },function () {
        $(this).find('div').hide();
    })
})
//hot显示
$(function () {
    $(".promoted").append('<s class="hot"></s>');
})
//轮播图
$(function () {
    var num = 0;
    var $oll = $('#jnImageroll div a');
    $oll.on('mouseover',function () {
        var $index = $(this).index();
        $oll.css('opacity','0.7').eq($index).addClass('chos').css('opacity','1').siblings().removeClass('chos');
        $('#JS_imgWrap img').eq($index).stop(true,true).fadeIn().siblings().stop().fadeOut();
        num = $(this).index();
    })
    $oll.eq(0).trigger('mouseover');
    run();
    function run() {
        timer = setInterval(function () {
            num++;
            if(num == $('#JS_imgWrap img').length){
                num = 0;
            }
            $oll.eq(num).triggerHandler('mouseover');
        },1500)
    }
    $('#jnImageroll').on('mouseover',function () {
        clearInterval(timer);
    }).on('mouseout',function () {
        run();
    })
});
//超链接文字提示
$(function () {
   $('.tooltip').on('mouseover',function (e) {
       this.newTitle = this.title;
       this.title = '';
       console.log(this.newTitle);
       $('body').append('<div id="tooltip">'+this.newTitle+'，买买买！'+'</div>');
       $('#tooltip').css({
           'left': (e.pageX+10)+'px',
           'top':(e.pageY+10)+'px'
       }).show('fast');
   }).on('mouseout',function () {
       this.title = this.newTitle;
       $('#tooltip').remove();
   }).on('mousemove',function(e){
       $('#tooltip').css({
           'left':(e.pageX+10)+'px',
           'top':(e.pageY)+'px'
       });
   });
});
//品牌活动模块横向滚动
$(function () {
    $('#jnBrandTab li').on('click',function () {
        $(this).addClass('chos').siblings().removeClass('chos');
        $(this).addClass('skin-color').siblings().removeClass('skin-color');
        $('#jnBrandList').stop(true).animate({'left': -($(this).index()*$('#jnBrandList li').innerWidth()*4)},1000)
    }).eq(0).trigger('click');
})
















