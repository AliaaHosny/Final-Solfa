
// $(document).ready(function(){
//  $(".action-header2")[0]&&$("#header,  .action-header2").affix( {
//     offset:  {
//     top: $(".action-header2").offset().top;
// }
// });
// });

$(window).scroll(function(){
  var sticky = $('.action-header2'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
