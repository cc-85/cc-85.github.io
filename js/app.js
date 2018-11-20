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
  // const $heroactive = $('.hero');
  const $menulink = $('.nav-menu a');

  $togglenav.on('touchstart', () => {
    $togglenav.toggleClass('active');
    $navul.toggleClass('active');
    // $heroactive.toggleClass('active');
  });

  $menulink.on('touchstart', () => {
    $togglenav.toggleClass('active');
    $navul.toggleClass('active');
    // $heroactive.toggleClass('active');
  });

});
