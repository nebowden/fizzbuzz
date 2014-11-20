$(document).ready(function() {

	var mainFunction = function() {
		var userNumber = +$('.user-number').val();
		var alertMessage = "Please enter a whole numeral greater than 0.";
		var runFizz = function (limit){
			for (var i=1; i <= limit; i++) {
				if ((i%3)==0 && (i%5)==0) {
					$('.fb-list').append("<li>fizz buzz</li>");
				}
				else if ((i%3)==0) {
					$('.fb-list').append("<li>fizz</li>");			
				}
				else if ((i%5)==0) {
					$('fb-list').append("<li>buzz</li>");
				}
				else {
					$('.fb-list').append("<li>" + i + "</li>");	
				};
			};
		};

		if (isNaN(userNumber)) {
			alert(alertMessage);
			clearField();
		}

		else if (userNumber <= 0) {
			alert(alertMessage);
			clearField();
		}

		else if ((userNumber%1) != 0) {
			alert(alertMessage);	
			clearField();
		}

		else { 

			runFizz(userNumber);
			$(".user-number").blur();
		};
	};

	$('.start-button').click(function(){
		mainFunction()});

	$('.user-number').keydown(function (event){
		if(event.which==13)
		{
		mainFunction()};
	});

	var clearField = function () {			
			$(".fb-list").find("li").remove();
			$(".user-number").val('');	
			};

	$(".user-number").on("click focus", function () {
			clearField();
			});
})