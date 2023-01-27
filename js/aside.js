$( function() {
  $( ".aside-open" ).accordion({
    heightStyle: "content",
    active: false,
    collapsible: true  
  });
});
$(function() {
  $(".aside__link-wrapper").click(function() {
      $(".aside__link-wrapper").removeClass("active-aside");         
      $(this).toggleClass("active-aside");
  })
});