
$(document).ready(function(){

  $('*').removeClass('animation')
  $('body').css('background-color', '#fff')
  $('.services .accordion .accordion-button').css('background-color','rgba(0, 101, 177, 0.04)')
  $('.services .accordion .accordion-item').css('background-color','rgba(0, 101, 177, 0.04)')
  $('footer').css('background-color','#F0F5F9')
  $('.show .content').css('border-color','#F5F9FC')
  $('.services .accordion-body ul').css('list-style','disc')

  
  if($(window).width() < 576){
    $('.aboutUs_name').addClass('slide_')
  }
  else{
    $('.aboutUs_name').removeClass('slide_')
    $('.footer_about').slideDown()
  }

  $(window).resize(function(){
    var windowWidth = $(window).width()
    if (windowWidth < 576 ){
      $('.aboutUs_name').addClass('slide_')
    }
    else{
      $('.aboutUs_name').removeClass('slide_')
      $('.footer_about').slideDown()
    }
  });

  $(".aboutUs_name").on('click', function(e){
    var windowWidth = $(window).width()
    if(windowWidth < 576){
      $(this).siblings('.footer_about').slideToggle("slow");
      $(this).toggleClass('rotate')
    }
    
  });
    
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 36,
      breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 24,
          },            
          420: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 36,
          }            
        },
  });

  $(".links_name").click(function(){
      $(this).siblings().slideToggle("slow");
      $(this).toggleClass('rotate')
  });

  $('.services .show_all').on('click', function(e){
      $(this).css('display', 'none')
      $('.service_item').css('display', 'flex')
      $('.services_block').css('padding-bottom', '36px')
  })

  $(".hamburger").on('click',function(e){
    $(".catalogModal").toggleClass('show')
  })
  $('.show .modalBody .menu .menu_item').hover(function(e){
    $('.content').toggleClass('')
  })
  $('.close_btn').on('click',function(e){
    $(".catalogModal").removeClass('show')
  })
  $('.page_link').on('click',function(e){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')    
  })

  $(".menu .menu_item").on('click', function(e){
    e.preventDefault();
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    $('.show .modalBody .content').addClass('show')
  })
  

})

$(window).bind("load", function () {
  $('*').removeClass('loading')
});



