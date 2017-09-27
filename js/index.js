$(".main-menu .item").click(function() {
  console.log("click");
    $(".main-menu .item.current").removeClass("current");
    $(this).addClass('current');
});
