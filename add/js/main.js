
// Scroll
$("#head-menu").on("click","a", function (event) {
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь

        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс

    $('body,html').animate({scrollTop: top}, 1500);
});
$('.acc-btn').click(function(e) {
    e.preventDefault();
    $('.portfolio-list').toggleClass('show').next().slideToggle();
  });
  $('.acc-btn').click(function(e) {
    e.preventDefault();
    $('.img-d').toggleClass('show');
});
$('.acc-btn').click(function(e) {
    e.preventDefault();
    $('.img-u').toggleClass('show');
});
// Hamburger menu
$(function() {
    $('.menu-open').click(function() {
        $('.burg-menu').toggleClass('show-menu')
    })
    $('.hamb-close').click(function() {
        $('.burg-menu').removeClass('show-menu')
    })
    $('.menu-open').click(function() {
        $('.head__btn').addClass('mar')
    })
    $('.hamb-close').click(function() {
        $('.head__btn').removeClass('mar')
    })
});

  $('.offer__btn').click(function(e) {
    e.preventDefault();
    $('.login-form').fadeIn();

    $('.login-form').click(function() {
        $('.login-form').fadeOut();
    });

    $('.object-close').click(function() {
        $('.login-form').fadeOut();
    });

    $('.login-form').children().click(function(e) {
        e.stopPropagation();
    });
});
let inputs = document.querySelectorAll('.input-file');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.file-btn__text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.file-btn__text').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.file-btn__text').innerText = labelVal;
  });
});

