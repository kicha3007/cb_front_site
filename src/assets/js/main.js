;

function DOMready() {




    $("[data-header-burger]").on("click", function () {
        $(this).toggleClass("active");
        $("[data-mobile-menu]").toggleClass("active");
        $("html").toggleClass("overflow-hidden");



    });

    $("[data-note-box]").fadeOut(0);
    setTimeout(function () {
        $("[data-note-box=\"top\"]").fadeIn(300);
    }, 3000)



    $("[data-note-box-close]").on("click", function () {
        console.log($(this).closest("[data-note-box]"));
        $(this).closest("[data-note-box]").fadeOut(300);
    })

    let element = $("[data-note-box=\"other\"]"), display;
    let timerNote;

    $(window).scroll(function () {
        display = $(this).scrollTop() >= 250;
        if(display){

          timerNote =   setTimeout(function () {
                element.fadeIn();
            }, 3000)
        }else{
            clearTimeout(timerNote);
                element.fadeOut();

        }
    });

}

document.addEventListener("DOMContentLoaded", DOMready);



