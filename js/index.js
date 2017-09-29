$(".main-menu .item").click(function() {
  console.log("click");
    $(".main-menu .item.current").removeClass("current");
    $(this).addClass('current');
});

// function scrollNav() {
//   $(".main-menu .item").click(function(){
//     //Toggle Class
//     console.log($(this).attr('href'));
//     $(".main-menu .item.current").removeClass("current");
//     $(this).addClass('current');
//
//     //Animate
//     $('html, body').stop().animate({
//         scrollTop: $( $(this).attr('href') ).offset().
//     }, 400);
//     return false;
//   });
//   // $('.scrollTop a').scrollTop();
// }
// scrollNav();

var mainMenuItems = document.querySelectorAll(".main-menu, .item");


var clickAndScroll = function() {

  // console.log('scroll');
  // animatedScrollTo(
  //         document.body, // element to scroll with (most of times you want to scroll with whole <body>)
  //         0, // target scrollY (0 means top of the page)
  //         1000, // duration in ms
  //         function() { // callback function that runs after the animation (optional)
  //           console.log('done!')
  //         }
  //     );
};

for (var i = 0; i < mainMenuItems.length; i++) {
    mainMenuItems[i].addEventListener('click', clickAndScroll, false);
}

//   $(".main-menu .item").addEventListener('click', function () {
//     animatedScrollTo(
//         document.body, // element to scroll with (most of times you want to scroll with whole <body>)
//         0, // target scrollY (0 means top of the page)
//         10000, // duration in ms
//         function() { // callback function that runs after the animation (optional)
//           console.log('done!')
//         }
//     );
// });
