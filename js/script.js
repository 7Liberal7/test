$(document).ready(function () {
  $('.card').each(function () {
    calculateProductPrice($(this));
  });

  $('.card__img-container:nth-child(1)').addClass('active');

  $('.card__img-container').hover(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  },
    function () {
      $(this).removeClass('active');
      $(this).parent().children(':nth-child(1)').addClass('active');
    });

  $(document).on('click', '.card [data-price]:not(.active)', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    if ($(this).parents('.swiper-container-initialized')) {
      let slider = $(this).parents('.swiper-container'),
        slideIndex = $(this).parents('.swiper-slide').data('swiper-slide-index'),
        duplicates = slider.find('.swiper-slide[data-swiper-slide-index="' + slideIndex + '"]'),
        parameter = $(this).data('parameter'),
        parameterValue = $(this).data('parameter-value');
      if (duplicates.length > 1) {
        duplicates.find('[data-parameter="' + parameter + '"]').removeClass('active');
        duplicates.find('[data-parameter="' + parameter + '"][data-parameter-value="' + parameterValue + '"]').addClass('active');
      }
    }
    calculateProductPrice($(this).parents('.card'));
  });

  new Swiper('.review__list', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    slidePrevClass: 'review__item--prev',
    slideNextClass: 'review__item--next',
    slideActiveClass: 'review__item--center',
    navigation: {
      prevEl: '.review__btn-prev',
      nextEl: '.review__btn-next',
    }
  });

  const quiz = new Swiper('.quiz__question-list', {
    slidesPerView: "auto",
    allowTouchMove: false,
    autoHeight: true,
    navigation: {
      prevEl: '.quiz__prev',
      nextEl: '.quiz__next',
    },
    breakpoints: {
      768: {
        autoHeight: false
      }
    },
    on: {
      slideChange: function (s) {
        let index = s.realIndex,
          nextIndex = index + 1;
        if (nextIndex < 8) {
          $('.quiz__question').eq(index).find('input[type=radio]').prop('checked', false);
          $('.quiz__current-question').text(nextIndex);
          if ($('.quiz__tracker-item').eq(index).hasClass('quiz__tracker-item--active')) {
            $('.quiz__tracker-item').eq(nextIndex).removeClass('quiz__tracker-item--active');
          } else {
            $('.quiz__tracker-item').eq(index).addClass('quiz__tracker-item--active');
          }

        } else if (nextIndex == 8) {
          $('[data-finish-quiz]').each(function () {
            $(this).html($(this).data('finish-quiz'));
          });
        }
      },
    },
  });

  $(document).on('change', '.quiz__answer', function () {
    let question = $(this).parents('.quiz__question').index() + 1;
    try {
      if (question == 1) {
        ym(83293585, 'reachGoal', 'quiz1');
      } else if (question == 2) {
        ym(83293585, 'reachGoal', 'quiz2');
      } else if (question == 6) {
        ym(83293585, 'reachGoal', 'quiz6');
      } else if (question == 7) {
        ym(83293585, 'reachGoal', 'quiz7');
      }
    } catch (e) {
      console.log('???? ?????????????? ?????????????????? ????????????.');
    }
    quiz.slideNext();
  });

  $(".phone-mask").inputmask("+375 (99) 999 - 99 - 99");

  $().fancybox({
    selector: '.review__item:not(.swiper-slide-duplicate) .review__link',
    backFocus: false,
    loop: true
  });

  $(document).on('click', '.review__item.swiper-slide-duplicate .review__link', function (e) {
    var $slides = $(this).parent().parent().children('.review__item:not(.swiper-slide-duplicate)').children('.review__link');
    $slides.eq(($(this).parent().attr("data-swiper-slide-index") || 0) % $slides.length).trigger("click.fb-start", { $trigger: $(this) });
    return false;
  });

  $(document).on('click', '.anchor', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(document).on('click', '[data-modal]', function (e) {
    let modal = $(this).data('modal');
    e.preventDefault();
    if (modal == 'modalCatalog') {
      let card = $(this).parents('.card'),
        product = card.data('product'),
        price = card.data('price'),
        size = card.find('[data-parameter="size"].active').data('parameter-value'),
        mechanism = card.find('[data-parameter="mechanism"].active').data('parameter-value');
      $('#' + modal + ' [name=product]').val(product);
      $('#' + modal + ' [name=price]').val(price);
      $('#' + modal + ' [name=size]').val(size);
      $('#' + modal + ' [name=mechanism]').val(mechanism);
    }
    $('#' + modal).arcticmodal();
  });

  $(document).on('click', '.show-more-btn', function (e) {
    let container = $(this).siblings('.show-more-container');
    e.preventDefault();
    container.addClass('active');
    container.css('height', container.children().innerHeight());
    $(this).remove();
  });

  $(document).on('click', '.menu__btn', function () {
    $(this).siblings('.menu__list').slideToggle();
  });

  $(document).on('submit', 'form', function (e) {
    e.preventDefault();
    leadSend($(this));
  });

  if ($(window).width() > 480) {
    $('.care__text').unwrap();

    $('.show-more-container').css('height', $(this).find('.card').eq(0).innerHeight() * 1.3);
  } else {
    new Swiper('.card-list', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      on: {
        init: function () {
          $('.card-list').find('.swiper-slide-duplicate').each(function () {
            calculateProductPrice($(this));
          });
        },
      }
    });
  }

  // function leadSend(form) {
  //   var msg = form.serialize(),
  //     formType = form.find('[name=type]').val();
  //   $.ajax({
  //     type: "POST",
  //     url: "lead.php",
  //     data: msg,
  //     dataType: "json",
  //     success: function (data) {
  //       if (data.status_code == 200) {
  //         if (form.hasClass('quiz__question-list')) {
  //           quiz.slideNext();
  //         } else {
  //           $.arcticmodal('close');
  //           $('#modalThank').arcticmodal();
  //         }
  //         try {
  //           if (formType == '????????') {
  //             ym(83293585, 'reachGoal', 'quiz10');
  //           } else if (formType == '?????????? ???? ???????????????????? ????????????????') {
  //             ym(83293585, 'reachGoal', 'parkovka1');
  //           } else if (formType == '?????????? ????????????') {
  //             ym(83293585, 'reachGoal', 'footer1');
  //           } else if (formType == '?????????????????? ????????????????') {
  //             ym(83293585, 'reachGoal', 'vybor1');
  //           } else if (formType == '????????????????????????') {
  //             ym(83293585, 'reachGoal', 'konsult1');
  //           } else if (formType == '?????????? ???? ??????????') {
  //             ym(83293585, 'reachGoal', 'tkan1');
  //           } else if (formType == '?????????????? ???? ???????????? ?????????????? ?????? ????????') {
  //             ym(83293585, 'reachGoal', 'pofoto1');
  //           }
  //         } catch (e) {
  //           console.log('???? ?????????????? ?????????????????? ????????????.');
  //         }
  //       } else {
  //         alert('???????????????? ????????????! ' + data.message);
  //       }
  //     },
  //     error: function (xhr, str) {
  //       alert("???????????????? ????????????! ???????????????????? ?????????????????? ???????????????? ??????????.");
  //     }
  //   });
  // }

  document.querySelector('.modal__btn--gmail').addEventListener('click', function () {
    // alert('??????????????????, ?????? ???? ?????????? ???????? ?????? ?? ??????????????!');
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
      e.preventDefault();
      let error = formValidate(form);

      let formData = new FormData(form);

      if (error === 0) {
        form.classList.add('_sending');
        let response = await fetch('sendmail.php', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          let result = await response.json();
          alert(reult.message);
          form.reset();
          form.classList.remove('_sending');
        }
        else {
          form.classList.add('_sending');
          alert('????????????')
        }
      }
      else {
        alert('??????????????????, ?????? ???? ?????????? ???????? ?????? ?? ??????????????!');
      }
    }

    function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');

      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
      return error;
    }

    function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    }
    function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
    }
  });

  function calculateProductPrice(product) {
    let activeOptions = product.find('[data-price].active'),
      containerOldPrice = product.find('.card__cost-old'),
      containerPrice = product.find('.card__cost'),
      resultOldPrice = 0,
      resultPrice = 0;

    activeOptions.each(function () {
      resultOldPrice += $(this).data('old-price');
      resultPrice += $(this).data('price');
    });
    if (containerOldPrice.length) {
      animateCount(containerOldPrice, resultOldPrice);
    }
    animateCount(containerPrice, resultPrice);
    product.data('price', resultPrice);
  }

  function animateCount(container, result) {
    $({ countNum: parseInt(container.html().replace(/[&nbsp;\ ]/gi, '')) }).animate({
      countNum: result
    },
      {
        duration: 500,
        easing: "linear",
        step: function () {
          container.text(toRuLocale(Math.floor(this.countNum)));
        },
        complete: function () {
          container.text(toRuLocale(this.countNum));
        }
      });
  }

  function toRuLocale(x) {
    return x.toLocaleString('ru');
  }
});