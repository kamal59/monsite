
/*change navbar height on scroll*/
$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 550) {
      $('#myNav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#myNav').removeClass('scrolled-nav');
    } 
    
  }); 
  
});


/*animation*/
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

/*change opacity on scroll*/




$(window).on('scroll', function() {
	var divs = $('header .container');
   var st = $(this).scrollTop();
   divs.css({ 'opacity' : (1 - st/600) });
});

/*text toggle*/
function myFunction() {
    var x = document.getElementById("autonomie");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
function myFunction2() {
    var x = document.getElementById("curiosite");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
/*function myFunction2() {
    var x = document.getElementById("autonomie");
    if (x.className.indexOf("w3-show") == 0) {
        x.className += " ";
    } 
}*/