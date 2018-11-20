console.log('JS loaded');

$(() => {
  const $togglenav = $('.toggle-nav');
  const $navul = $('nav ul');
  const $menulink = $('.nav-menu a');

  $togglenav.on('click', () => {
    $togglenav.toggleClass('active');
    $navul.toggleClass('active');
  });

  $menulink.on('click', () => {
    $togglenav.toggleClass('active');
    $navul.toggleClass('active');
  });

});
