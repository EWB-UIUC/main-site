// // Progress bar
// NProgress.configure({ showSpinner: false });
//
// $(document).ready(function() {
//   $("abbr.timeago").timeago();
//   jQuery.timeago.settings.allowFuture = true;
//
//   NProgress.start();
//
//   // Estimated Reading Time
//   $(".time").text(function (index, value) {
//     return Math.round(parseFloat(value));
//   });
//   $(".hour").text(function (index, value) {
//     return Math.floor(parseFloat(value));
//   });
//
//   // Popovers
//   $('[data-toggle="popover"]').popover({ html: true });
// });
//
// $(window).load(function() {
//   NProgress.done();
// });

$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

});

$(function() {
  $('ul.nav a').bind('click',function(event) {
    var $anchor = $(this);

    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1250,'easeInOutExpo');
    event.preventDefault();
  });
});

$(function() {
  $('a.more').bind('click',function(event) {
    var $anchor = $(this);

    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1250,'easeInOutExpo');
    event.preventDefault();
  });
});
