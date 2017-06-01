$(function () {
  if($(window).width() >= 1025){
      if(document.getElementById('full-wrapper')){
          window.setScrollbar();     
      }
  }
  else{
      $('.full-wrapper').css({'overflow-y':'scroll', '-webkit-overflow-scrolling':'touch', 'overflow-x':'hidden'});
  }

  window.onresize = function(event) {
      if($(window).width() < 1025 && Scrollbar.has(document.getElementById('full-wrapper'))){
          scrollbar.destroy();
          $('.full-wrapper').css({'overflow-y':'scroll', '-webkit-overflow-scrolling':'touch', 'overflow-x':'hidden'});
      }
      if($(window).width() >= 1025 && !(Scrollbar.has(document.getElementById('full-wrapper')))){
          if(document.getElementById('full-wrapper')){
              window.setScrollbar();     
          }
      }
  };
});
