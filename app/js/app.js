
// MMENU OPTIONS

document.addEventListener(
	"DOMContentLoaded", () => {
			new Mmenu( "#my-menu", {
					// options
					pageScroll: true,
					// slidingSubmenus: true,
					extensions: ["theme-dark", "position-right","border-none",]
			}, {

			});
	}
);

// VIDEO PLAY BUTTON

var playButton = document.querySelector('.video__item-button');
var video = document.querySelector('.video__item');
// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
		video.play();
		playButton.style.display = 'none';
		video.style.cursor = "pointer";

    // Update the button text to 'Pause'
		playButton.innerHTML = "Pause";
  } else {
    // Pause the video
		video.pause();
    // Update the button text to 'Play'
    playButton.innerHTML = "Play";
  }
});

video.addEventListener("click", function() {
	if(video.paused == false) {
		playButton.style.display = 'block';
		video.pause();
		video.style.cursor = "initial";
	}
});


$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

$(document).ready(function(){
	$("#footer-menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

$(document).ready(function(){
	$("#link").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

$(document).ready(function(){   
	$(window).scroll(function () {
			if ($(this).scrollTop() > 0) {
					$('#scroller').fadeIn();
			} else {
					$('#scroller').fadeOut();
			}
	});
	$('#scroller').click(function () {
			$('body,html').animate({
					scrollTop: 0
			}, 400);
			return false;
	});
});


// =========================================================


let map_container = document.getElementById("map_container"),
	options_map = {
		once: !0,
		passive: !0,
		capture: !0
	};
map_container.addEventListener("click", start_lazy_map, options_map), map_container.addEventListener("mouseover", start_lazy_map, options_map), map_container.addEventListener("touchstart", start_lazy_map, options_map), map_container.addEventListener("touchmove", start_lazy_map, options_map);
let map_loaded = !1;

function start_lazy_map() {
	if (!map_loaded) {
		let e = document.getElementById("ymap_lazy");
		map_loaded = !0, e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data_src"), console.log("YMAP LOADED")
	}
}

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});


$(document).ready(function() {

	//E-mail Ajax Send
	$("questions__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});