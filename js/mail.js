$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "js/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заказ! В ближайшее время наш менеджер свяжется с Вами!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
