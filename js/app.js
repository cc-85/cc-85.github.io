console.log('JS loaded');

$(() => {
  const $togglenav = $('.toggle-nav');
  const $navul = $('nav ul');
  const $menulink = $('.nav-menu a');

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    $togglenav.on('click', () => {
      $togglenav.toggleClass('active');
      $navul.toggleClass('active');
    });

    $menulink.on('click', () => {
      $togglenav.toggleClass('active');
      $navul.toggleClass('active');
    });
  }

});
