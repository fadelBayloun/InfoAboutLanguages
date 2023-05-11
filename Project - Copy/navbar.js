//when the library of jquery is ready 
$(function () {
  /******Nav links style*******/
  $('.nav-link').on('mouseover', function () {
    $(this).addClass('nav-active');
    
  })
  .on('mouseleave', function () {
    $(this).removeClass('nav-active');
  });

/*****************************/
/********* Courses opening*********/ 

  $(".link-toggle").on("click", function (e) {
    $("div.Courses-content").css({
        left: e.target.offsetLeft + 10,
        top: e.target.offsetTop + 40
        
      }).toggle();
      /*for font awesome in the courses to rotate*/
    $(".fa-caret-right").toggleClass("fa-rotate-90");
    
  });

  $('body').on('click', function (e) {
    if($(e.target).hasClass('link-toggle') ){
      $('div.Courses-content').css('display', 'block');
    }

    /*for font awesome in the courses to rotate*/

    if( !$(e.target).hasClass('Courses-toggle') ) {
      $('div.Courses-content').css('display', 'none');
      if(!$(".fa-caret-right").hasClass("fa-rotate-90"));
        $(".fa-caret-right").removeClass("fa-rotate-90");
    }

  });


/***********************************/ 
 /*for dark theme */ 

  $('#dark-mode-btn').on('click', function () {
    $('body').toggleClass('dark-mode');
  });


});