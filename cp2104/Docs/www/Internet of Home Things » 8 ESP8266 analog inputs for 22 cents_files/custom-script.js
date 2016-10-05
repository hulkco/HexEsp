jQuery(document).ready(function(){
    // Targeting Social Media menu items.
    $("a[href$='http://facebook.com/internetofhomethings']").attr('title',"Follow Me On Facebook");
    $("a[href$='http://twitter.com/NetHomeThings']").attr('title',"Follow Me On Twitter");
    $("a[href$='https://www.youtube.com/channel/UCNtTjCxM_hl3qKkilY9tIfA/videos']").attr('title',"Follow Me On YouTube");
    $("a[href$='https://plus.google.com/u/0/b/111546542875880774718/111546542875880774718/posts']").attr('title',"Follow Me On Google");
    $("a[href$='https://www.pinterest.com/internetofhomet/internet-of-things/']").attr('title',"Follow Me On Pinterest");
    $("a[href$='https://github.com/internetofhomethings']").attr('title',"Follow Me On GitHub");
    $("a[href$='https://www.tumblr.com/blog/internetofhomethings']").attr('title',"Follow Me On Tumbler");
    //Set menu width based on size of window (viewpoint)
    $('#menu-main-menu').width($('.navbar-default').width()-$('#blogo').width()-$('.social-icon').width())-10&'px';
    //Add button to bottom of home page featured content (3 articles)
    $('.box1 .box-content p').html($('.box1 .box-content p').text()+'<br><br><center><a class="btn btn-info btn-lg" href="http://wp.me/p5NRQ8-5z">Read more</a></center>');
    $('.box2 .box-content p').html($('.box2 .box-content p').text()+'<br><br><center><a class="btn btn-info btn-lg" href="http://wp.me/p5NRQ8-6S">Read more</a></center>');
    $('.box3 .box-content p').html($('.box3 .box-content p').text()+'<br><br><center><a class="btn btn-info btn-lg" href="http://wp.me/p5NRQ8-6o">Read more</a></center>');
    //Style contact page refresh image
    $('#fscf_captcha_refresh1 img').css({'width':'25px','margin-top':'14px','margin-left':'-15px'});
});
$( window ).resize(function() {
    $('#menu-main-menu').width($('.navbar-default').width()-$('#blogo').width()-$('.social-icon').width())-10&'px';
});
$( window ).load(function() {
    $('#menu-main-menu').width($('.navbar-default').width()-$('#blogo').width()-$('.social-icon').width())-10&'px';
});

$('.navbar-collapse').on('show.bs.collapse', function() {
    $('#menu-main-menu').width($('#blogo').width()+10)&'px';
    //Add button to bottom of home page featured content (3 articles)
    $('.box1 .box-content p').html($('.box1 .box-content p').text()+'<br><br><center><a class="btn btn-info btn-lg" href="http://wp.me/p5NRQ8-5z">Read more</a></center>');
    $('.box2 .box-content p').html($('.box2 .box-content p').text()+'<br><br><center><a class="btn btn-info btn-lg" href="http://wp.me/p5NRQ8-6S">Read more</a></center>');
    $('.box3 .box-content p').html($('.box3 .box-content p').text()+'<br><br><center><a class="btn btn-info btn-lg" href="http://wp.me/p5NRQ8-6o">Read more</a></center>');
});

