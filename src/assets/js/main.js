;

function DOMready() {

    // Глобальные настройки
    var globParam = (function () {
        var sizes = {
            DESKTOP: "1199",
            LAPTOP: "991",
            TABLETS: "767",
            PHONES: "575"
        };

        return {
            getMediaSize: function () {
                return sizes;
            },
            windowWidth: function () {
                return $(window).width();
            }
        }

    })();

    $("[data-header-burger]").on("click", function () {
        $(this).toggleClass("active");
        $("[data-mobile-menu]").toggleClass("active");
        $("html").toggleClass("overflow-hidden");

    });

    $("[data-note-box-close]").on("click", function () {
        console.log($(this).closest("[data-note-box]"));
        $(this).closest("[data-note-box]").fadeOut(300);
    })

    // let default_width = 1300;
    // let default_height = 700;

    // let realHeightDoc = window.screen.availHeight;
    // let realWidthDoc = document.documentElement.scrollWidth;

    // if(realWidthDoc < default_width ) {
    //     let newHeight = (realWidthDoc / default_width) * default_height;
    //     $("#gameContainer").css({ "height":newHeight+"px"});
    // } else {
    //     $("#gameContainer").css({ "width":default_width+"px", "height":default_height+"px"});
    // }

    default_width = 1300;
    default_height = 700;
    let default_proportions = default_width / default_height;

    let mobile_height = innerHeight;
    let mobile_width = default_width / (default_height / mobile_height);
    if (mobile_height > default_height) mobile_height = default_height;
    if (mobile_width > default_width) mobile_width = default_width;
    $("#gameBox").css({"width": mobile_width + "px", "height": mobile_height + "px"});
    $("#gameContainer").css({"width": mobile_width + "px", "height": mobile_height + "px"});

    $("#start_game").click(function () {

        $.ajax({
            method: "GET",
            url: "/igra_ajax.php",
        })
         .done(function (msg) {
             $("#game_script").html(msg);

         });

    });

    let default_width = 1300;
    let default_height = 700;

    let realHeightDoc = window.screen.availHeight;
    let realWidthDoc = document.documentElement.scrollWidth;

    // window.addEventListener("orientationchange", function () {
    //     if (window.matchMedia("(orientation: portrait)").matches) {
    //         if (realHeightDoc > realWidthDoc) {
    //             $("[data-game-page]").addClass("mobile");
    //
    //         }
    //         alert("PORTRAIT")
    //     }
    //     if (window.matchMedia("(orientation: landscape)").matches) {
    //         alert("LANSCAPE")
    //     }
    // }, false);

    // if (realHeightDoc > realWidthDoc) {
    //     $("[data-game-page]").addClass("mobile");
    //
    // }

    let modalGift = $("#modal-gift");
    let overlayAllTransparent = $("[data-overlay-all-transparent]");

    // setTimeout(function () {
    //     activetedGiftModal();
    // }, 10)

    $("[data-modal-gift-close], [data-overlay-all-transparent]").on("click", function () {
        deactivatedGiftModal();

    });

    function activetedGiftModal() {
        modalGift.addClass("active");
        overlayAllTransparent.addClass("active");

    }

    function deactivatedGiftModal() {
        modalGift.removeClass("active");
        overlayAllTransparent.removeClass("active");

    }

    if (globParam.windowWidth() < globParam.getMediaSize().PHONES) {

        $("[data-seminar-page-column=\"1\"]").append($("[data-seminar-item-pos=\"3\"]"));
        $("[data-seminar-page-column=\"2\"]").prepend($("[data-seminar-item-pos=\"2\"]"));

    }


}

document.addEventListener("DOMContentLoaded", DOMready);






