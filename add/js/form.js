//Если все хорошо
$('.modal-success').click(function() {
    $('.modal-success').fadeOut();
});

$('.contact-btn').click(function() {
    $('.modal-success').fadeOut();
});

$('.modal-success').children().click(function(e) {
    e.stopPropagation();
});
//Если что-то пошло не так
$('.modal-fail').click(function() {
    $('modal-fail').fadeOut();
});

$('.contact-btn').click(function() {
    $('.modal-fail').fadeOut();
});

$('.modal-fail').children().click(function(e) {
    e.stopPropagation();
});
/*
$('.contact-form').submit(function(e) {
    e.preventDefault();
    var formData = new FormData($(this)[0]);

    var $form = $(this);
    $.ajax({
        type: "POST",
        url: "/mail.php",
        data: formData,
		async: false,
		cache: false,
		contentType: false,
		processData: false
    }).done(function() {
        $('.login-form').fadeOut();

        $('.modal-success').fadeIn();
    }).fail(function() {
        $('.login-form').fadeOut();

        $('.modal-fail').fadeIn();
    });
});*/


 $('.contact-form').on('submit', function(e){
    e.preventDefault();
	
    var $that = $(this),
    formData = new FormData($that.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму (*)
    $.ajax({
	  url:"/mail.php",
	  type: "POST", 
      contentType: false,
      processData: false,
      data: formData,
      success: function(data1){
        $('.login-form').fadeOut();
        $('.modal-success').fadeIn();
   
      }
    });
  });
  