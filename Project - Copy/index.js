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
        top: e.target.offsetTop + 40,
        transition:1 ,
        opacity : 1
      }).toggle();
    $(".fa-caret-right").toggleClass("fa-rotate-90");
    
  });

  $('body').on('click', function (e) {
    if($(e.target).hasClass('link-toggle') ){
      $('div.Courses-content').css('display', 'block');
    }
  });

/**********************************/
/*for font awesome in the courses*/

  $('body').on('click', function (e) {
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
/*****************/
  
/******Carousel *********/

// to run the inside function every few seconds
setInterval(function () {
  var indx = $('.carousel__slide').index($('.carousel__slide.active'))+1;//get the next index of the active slide
  if( indx>= $('.carousel__slide').length ) { //checking if the latest index return it to 0
      indx = 0;
  }

  activeCarouselSlider(indx); //activate slide basic on index
}, 5500);//every 5.5seconds (5500ms) to change a pic

$('.carousel__indicator').on('click', function () {      //indicating which class to do some work on it ('carousel__indicator') so on click at one of it do something (the function  is set to do this 'something')
  var indx = $('.carousel__indicator').index($(this))   // we declare a variable 'indx' we work on the ('carousel__indicator') so (this) means that the one you do thing on it (as previous we declare the clicking is the thing we do) so on clicking on one of the carousel__indicator we get the index of it so we type $('carousel__indicator').index() to detect the index so (this) means the one we click on it
  activeCarouselSlider(indx); //activate slide basic on index
});

$('.carousel__button').on('click', function () { //same previous expalin but on button we work
  var left = $(this).hasClass('carousel__button--left'); // declaring variable , $(this) means so on click to one of them ,and how to detect which one we detect is by the class of it hasClass('carousel__button--left')
  var right = $(this).hasClass('carousel__button--right'); //same as previous but the right button
  var indx = $('.carousel__slide').index($('.carousel__slide.active')); //same as before in the previous function but in this we need the index of the one we are seeing (active slide)
  var total_sliders = $('.carousel__slide').length - 1; //we indicate the total number of the pictures (same as string array in c)

  if( left && indx<=0 ) { // if you click left and the index on the first slider
      indx = total_sliders;
  } else if( right && indx >= total_sliders ) { //if you click at right and the index on the last slider
      indx = 0;
  } else if( left ) { //if you click on left you go backward 
      indx -= 1;
  } else { //if you click right you go forward
      indx += 1;
  }

  activeCarouselSlider(indx);//activate slide basic on index
});

var activeCarouselSlider = function(indx) { //a function to remove the current index and add the active class to the next image and button  //to activate the slide basic on index 
  $('.carousel__indicator').removeClass('active');  //just remove a class
  $($('.carousel__indicator')[indx]).addClass('active');//we need to work on the active slide so we do $(of a thing) and how we detect the next index =>is the one that has the variable indx so we detect it by $('.carousel__indicator')[indx]) you can declare it as a variable name it next_slider if you want and now we work on the next_slider as we have write

  $('.carousel__slide').removeClass('active');    //just remove a class
  $($('.carousel__slide')[indx]).addClass('active');//same explain as before :)
}



});
