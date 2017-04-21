$(document).ready(function(e) {
  $(document).foundation();
  var $left = $('#left.owl-carousel'),
      $center = $('#center.owl-carousel'),
      $right = $('#right.owl-carousel');
  $left.owlCarousel({
    items: 1,
    smartSpeed: 500,
    nav: false,
    dots: false,
    responsive: {
      0:{
        items: 1
      },
      567:{
        items: 1
      },
      1199:{
        nav: false
      }
    },
    mouseDrag: false,
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
  });
  $center.owlCarousel({
    items: 1,
    smartSpeed: 500,
    nav: true,
    navText: ['<img class="svg" src="assets/img/prev-portfolio.svg" />','<img class="svg" src="assets/img/next-portfolio.svg" />'],
    dots: true,
    dotsEach: true,
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      567:{
        items: 1,
        nav: false
      },
      1199:{
        nav: true
      }
    },
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    onChanged: changeOwl,
  });
  $right.owlCarousel({
    items: 1,
    smartSpeed: 500,
    nav: false,
    dots: false,
    responsive: {
      0:{
        items: 1
      },
      567:{
        items: 1
      },
      1199:{
        nav: false
      }
    },
    mouseDrag: false,
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
  });

  $('#left').on('click', function(){
    $left.trigger('prev.owl.carousel');
    $right.trigger('prev.owl.carousel');
    $center.trigger('prev.owl.carousel');
  });

  $('#right').on('click', function(){
    $left.trigger('next.owl.carousel');
    $right.trigger('next.owl.carousel');
    $center.trigger('next.owl.carousel');
  });

  function changeOwl(e) {
    //console.log(e);
    $left.trigger('to.owl.carousel', [e.item.index, 500]);
    $right.trigger('to.owl.carousel', [e.item.index, 500]);
  }

  /*
  var send_options = {
    success: showThankyou,
    //beforeSubmit: validateForm,
    //target: '#SuccessContactBox'
    clearForm: true,
    resetForm: true
  }
  $('#ContactForm_Form').submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log('submit via ajax');
    $(this).ajaxSubmit(send_options);
    return false;
  });
  function showThankyou(responseText, statusText, xhr, $form) {
    //console.log(responseText);
    //console.log(statusText);
    $('#ContactForm_Form').replaceWith(responseText);
  }
  */

});