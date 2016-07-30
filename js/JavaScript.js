//window_load

$(document).ready(function () {
    $("body").css("display", "none");

    $("body").fadeIn(1000);

    $("a.transition").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(3000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});

//$(document).ready(function () {
//    $("body").css("display", "none");
//});
//$(document).ready(function () {
//    $("body").css("display", "none");
//    $("body").fadeIn(1000);
//});

//skroll

$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 500);
    });
});