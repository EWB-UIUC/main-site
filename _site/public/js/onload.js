// Progress bar
NProgress.configure({ showSpinner: false });

$(document).ready(function() {
  $("abbr.timeago").timeago();
  jQuery.timeago.settings.allowFuture = true;
  
  NProgress.start();

  // Estimated Reading Time
  $(".time").text(function (index, value) {
    return Math.round(parseFloat(value));
  });
  $(".hour").text(function (index, value) {
    return Math.floor(parseFloat(value));
  });

  // Popovers
  $('[data-toggle="popover"]').popover({ html: true });
});

$(window).load(function() {
  NProgress.done();
});
