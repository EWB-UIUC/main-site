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
  // var date = $('#calendar').fullCalendar('getDate').format('D');
  var date = moment().format('D');

  $('#calendar').fullCalendar({
    header: {
        left: 'title',
        center: '',
        right: 'prev today next'
    },
    googleCalendarApiKey: 'AIzaSyBrWdCHFwbNkPi9fXbN3f8w0fIrXfuHN2U',
      events: {
      googleCalendarId: 'lplaeaaetf890r2hkhdkv3cs7g@group.calendar.google.com'
    },
    eventAfterAllRender: function(view) {
      $('.fc-state-highlight').html("<span class='highlighted-date'>" + date + "</span>");
    }
  });
  $('.fc-state-highlight').html("<span class='highlighted-date'>" + date + "</span>");
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
