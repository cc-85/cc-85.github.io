console.log('JS loaded');

// const $navBurger = document.querySelector('.toggle-nav');
//
// if ($navBurger) {
//
// }


// jQuery(document).ready(function() {
// 	jQuery('.toggle-nav').click(function(e) {
// 		jQuery(this).toggleClass('active');
// 		jQuery('nav ul').toggleClass('active');
//
// 		e.preventDefault();
// 	});
// });


$(() => {
  const $togglenav = $('.toggle-nav');
  const $navul = $('nav ul');
  const $menulink = $('.nav-menu a');

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    $togglenav.on('touchstart', () => {
      $togglenav.toggleClass('active');
      $navul.toggleClass('active');
    });

    $menulink.on('click', () => {
      $togglenav.toggleClass('active');
      $navul.toggleClass('active');
    });
  }

});
