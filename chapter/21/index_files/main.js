
$(document).ready(function(){
        $('.banner-box').hide();
        //var contenttop=$('.hot-box').css("margin-top").replace(/px/,'')-0+40;
        //alert(contenttop);
        //$('.hot-box').css('margin-top',contenttop+'px');
        $('.hot-box').hide()
        $('.hotted').show();
        $('#web').hide();
        $('#web1').hide();
        $('#web2').hide();
        $('#mob').show();
        $('.bshare-custom').hide();
        $('.qrcode').hide();
        var winHeight=600;
        if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
// 通过深入 Document 内部对 body 进行检测，获取窗口大小
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
        {
            winHeight = document.documentElement.clientHeight;
            winWidth = document.documentElement.clientWidth;
        }
        $('.modal-lg').css('width',winWidth)
        if(/\/curselist-/.test(window.location.pathname)){
            location.href=window.location.pathname.replace(/curselist-/,'m-curselist-');
        }

        $('header').hide();
        $('.content').css('margin-top','0px');
        $('.footer-angler').hide();

$('body').append(
    '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">'+

   ' <!-- Background of PhotoSwipe.'+
    '    It\'s a separate element, as animating opacity is faster than rgba(). -->'+
        '<div class="pswp__bg"></div>'+

        '<!-- Slides wrapper with overflow:hidden. -->'+
        '<div class="pswp__scroll-wrap">'+

        '<!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->'+
    '<!-- don\'t modify these 3 pswp__item elements, data is added later on. -->'+
            '<div class="pswp__container">'+
                '<div class="pswp__item"></div>'+
                '<div class="pswp__item"></div>'+
                '<div class="pswp__item"></div>'+
            '</div>'+
        '<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->'+
            '<div class="pswp__ui pswp__ui--hidden">'+

        //'<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">'+
        //'<div class="pswp__share-tooltip"></div>'+
        //'</div>'+
                '<div class="pswp__top-bar">'+
        '<!--  Controls are self-explanatory. Order can be changed. -->'+
                    '<div class="pswp__counter"></div>' +
    '<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>'+

                    '<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'+

                    '<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>'+

        '<!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->'+
        '<!-- element will get class pswp__preloader--active when preloader is running -->'+
                    '<div class="pswp__preloader">'+
                        '<div class="pswp__preloader__icn">'+
                            '<div class="pswp__preloader__cut">'+
                                '<div class="pswp__preloader__donut"></div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="pswp__caption">'+
                    '<div class="pswp__caption__center"></div>'+
                '</div>'+
                '<button class="pswp__button pswp__button--arrow--left" title="Arrow Left"></button>'+
                '<button class="pswp__button pswp__button--arrow--right" title="Arrow Right"></button>'+

            '</div>'+
        '</div>'+
    '</div>');
    /*  hide-show mobile menu  */
    $("#menu_icon").click(function(){
        $("#nav_menu").toggleClass("show_menu");
        return false;
    });
    var items=[];
    var imgs={}
    var i=0;
    $('.imgstyle').each(function(){
        var _self=this;
        $(_self).find('img').load(function(){
            // console.log(this.width,this.height)
            // items.push({src:$(this).attr('src'),w:this.width,h:this.height});
            var _self1=this;
            items.forEach(function(item){
                // console.log(item)
                if(item.src===$(_self1).attr('src')){
                    item.w=_self1.width;
                    item.h=_self1.height;
                }
            })
        })
        // imgs[$(this).find('img').attr('src')]={};
        items.push({src:$(this).find('img').attr('src')})
        $(this).attr('index',i);
        i++;
    })
    $('.imgstyle').click(function(){
        var index=$(this).attr('index')-0;
        // console.log(items,index)

        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array

        // define options (if needed)
        var options = {
            // history & focus options are disabled on CodePen
            //focus: false,
            //closeOnScroll: false,
            //closeOnVerticalDrag: false,
            //escKey: false,
            //showAnimationDuration: 0,
            //hideAnimationDuration: 0,
            index: index,
            maxSpreadZoom:3,
            //timeToIdle:1000,
            spacing:0,
            //loadingIndicatorDelay:500
            preload:[1,3]

        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    })
});



