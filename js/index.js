$("main-menu item").click(function() {
    $("main-menu item.current").removeClass("current");
    $(this).addClass('current');
});
