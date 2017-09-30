const scrollDuration = 400;

function onMenuItemClick (e) {
  e.preventDefault ();
  $(".main-menu .item.current").removeClass("current");
  $(this).addClass('current');
  let a = this.getElementsByTagName('a')[0];
  if (a.href.slice(-1) == '#') {
   return;
  }
  let target = a.href.split('#')[1];
  let targetTop = $('#'+ target).offset().top;

  $('html, body').animate({scrollTop:targetTop}, scrollDuration);
}

document.addEventListener("DOMContentLoaded", function(event) {
  let mainMenu = document.getElementsByClassName('main-menu')[0];
  let items = mainMenu.getElementsByClassName('item');

  Array.from(items).forEach (item => item.addEventListener ('click', onMenuItemClick));
});
