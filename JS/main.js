// Табы трендов
$(document).ready(function(){
    var trandItem = $(".trands-tabs__item")
    var trandContent = $(".trands-content")

    trandItem.on('click', function (event) {
        var activeContent = $(this).attr('data-target')
        // console.log($(this).attr('data-target'));
        trandContent.removeClass("trands-content--active")
        trandItem.removeClass("trands-tabs__item--active")

        $(activeContent).addClass("trands-content--active")
        $(this).addClass("trands-tabs__item--active")


    });



    // Слайдер==============================================================
    $(document).ready(function () {
      var mySwiper = new Swiper(".reviews__swiper-container", {
        // Optional parameters
        autoplay: {
          delay: 7000,
        },
        loop: true,
        disableOnInteraction: true,
    
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
         

        },
      });
    
      var mySwiper = document.querySelector(".swiper-container").swiper;
      $(".swiper-container").mouseenter(function () {
        mySwiper.autoplay.stop();
      });
    
      $(".swiper-container").mouseleave(function () {
        mySwiper.autoplay.start();
      });
    })


    // Слайдер 2===========================================
    var historySlider = new Swiper('.history__slider-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 400,
     
    
      // Navigation arrows
      navigation: {
        nextEl: '.history__button--next',
        prevEl: '.history__button--prev',
      },
    
      
    })
    // Мобильное меню
    var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", function (){
  console.log("Клик по кнопке меню");
  document.querySelector(".mobile")
  .classList.toggle("mobile--visible");

});
// Модальное окно
var closeModalButton = $('.modal__close'); 
var modalButton = $('[data-toggle="modal"]');

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  
    function closeModal(event){
      event.preventDefault();
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass('modal__overlay--active');
      modalDialog.removeClass('modal__dialog--active');
    }
// Это если одно окно добавить!
    // function openModal(){
    //   // console.log("Вызов модального окна");
    //   var modalOverlay = $(".modal__overlay");
    //   var modalDialog = $(".modal__dialog");
    //   modalOverlay.addClass('modal__overlay--active');
    //   modalDialog.addClass('modal__dialog--active');
      
    // }
    // добавить несколько окон
    function openModal(){
      // console.log("Вызов модального окна");
      var targetModal = $(this).attr("data-href");
      $(targetModal).find(".modal__overlay").addClass("modal__overlay--active");

      $(targetModal).find(".modal__dialog").addClass("modal__dialog--active");
     
      
    }
    
// Закрытие модального окна через Esc
$(document).keyup(function (e) {
  if (e.key === "Escape" || e.keyCode === 27) {
    // console.log("Нажата клавиша Escape");
    closeModal(event);
  }
});
 //  Закрытие при клике мимо
  var modalOverlay = $(".modal__overlay");
  modalOverlay.on("click", function () {
    // var modalCl = $(".modal__dialog");
    var modalDialog = $(".modal__dialog");
    modalDialog.removeClass("modal__dialog--active");
    $(this).removeClass("modal__overlay--active");
   
  });
  function openModal(){
    // console.log("Вызов модального окна");
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--active");

    $(targetModal).find(".modal__dialog").addClass("modal__dialog--active");
   
    
  }


  // Валидация формы
$('.form').each(function(){
  $(this).validate({
    
    
    messages: {
    
    name: {
      required:"Введите полное имя",
      minlength: "Имя должно быть больше 2 символов"
  },
    email: {
      required: "Вы не ввели email",
      email: "Формат вашего адреса name@domain.com"
    },
    phone: {
      required:"Введите телефон",
      minlength: "Введите полный телефон"
      
    }
  }
  })
  // маска телефонного номера
  $(".phoneInput").mask("+7 (999) 999-99-99");

});

})







