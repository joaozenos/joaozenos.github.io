$( document ).ready(function() {

	$('img').hide();
	$('#menu').hide();

	$(window).scroll(function(){
		if($(this).scrollTop() > 600){
			$('#menu').fadeIn('slow');
		}
	        });

	$(window).scroll(function(){
		if ($(this).scrollTop() > 500){
			$('.img-lateral-perfil').show('slow');

		}
	        });

	$(window).scroll(function(){
		if($(this).scrollTop() > 900){
			$('.img-lateral-portfolio').show('slow');

		}
	        }); 

	$(window).scroll(function(){
		if($(this).scrollTop() > 1200){
			$('.img-lateral-citi').show('slow');
		}
	        });

	$(window).scroll(function(){
		if($(this).scrollTop() < 600){
			$('#menu').fadeOut('slow');
		}
	        });

});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  alert("E-mail copiado com sucesso.")
}