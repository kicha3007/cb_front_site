// ;
//
// function DOMready() {
//
//     // Глобальные настройки
//     var globParam = (function () {
//         var sizes = {
//             DESKTOP: "1199",
//             LAPTOP: "991",
//             TABLETS: "767",
//             PHONES: "575"
//         };
//
//         return {
//             getMediaSize: function () {
//                 return sizes;
//             },
//             windowWidth: function () {
//                 return $(window).width();
//             }
//         }
//
//     })();
//
//     $("[data-header-burger]").on("click", function () {
//         $(this).toggleClass("active");
//         $("[data-mobile-menu]").toggleClass("active");
//         $("html").toggleClass("overflow-hidden");
//
//     });
//
//     $("[data-note-box-close]").on("click", function () {
//         console.log($(this).closest("[data-note-box]"));
//         $(this).closest("[data-note-box]").fadeOut(300);
//     })
//
//     // let default_width = 1300;
//     // let default_height = 700;
//
//     // let realHeightDoc = window.screen.availHeight;
//     // let realWidthDoc = document.documentElement.scrollWidth;
//
//     // if(realWidthDoc < default_width ) {
//     //     let newHeight = (realWidthDoc / default_width) * default_height;
//     //     $("#gameContainer").css({ "height":newHeight+"px"});
//     // } else {
//     //     $("#gameContainer").css({ "width":default_width+"px", "height":default_height+"px"});
//     // }
//
//     default_width = 1300;
//     default_height = 700;
//     let default_proportions = default_width / default_height;
//
//     let mobile_height = innerHeight;
//     let mobile_width = default_width / (default_height / mobile_height);
//     if (mobile_height > default_height) mobile_height = default_height;
//     if (mobile_width > default_width) mobile_width = default_width;
//     $("#gameBox").css({"width": mobile_width + "px", "height": mobile_height + "px"});
//     $("#gameContainer").css({"width": mobile_width + "px", "height": mobile_height + "px"});
//
//     $("#start_game").click(function () {
//
//         $.ajax({
//             method: "GET",
//             url: "/igra_ajax.php",
//         })
//          .done(function (msg) {
//              $("#game_script").html(msg);
//
//          });
//
//     });
//
//     let default_width = 1300;
//     let default_height = 700;
//
//     let realHeightDoc = window.screen.availHeight;
//     let realWidthDoc = document.documentElement.scrollWidth;
//
//     // window.addEventListener("orientationchange", function () {
//     //     if (window.matchMedia("(orientation: portrait)").matches) {
//     //         if (realHeightDoc > realWidthDoc) {
//     //             $("[data-game-page]").addClass("mobile");
//     //
//     //         }
//     //         alert("PORTRAIT")
//     //     }
//     //     if (window.matchMedia("(orientation: landscape)").matches) {
//     //         alert("LANSCAPE")
//     //     }
//     // }, false);
//
//     // if (realHeightDoc > realWidthDoc) {
//     //     $("[data-game-page]").addClass("mobile");
//     //
//     // }
//
//     let modalGift = $("#modal-gift");
//     let overlayAllTransparent = $("[data-overlay-all-transparent]");
//
//     // setTimeout(function () {
//     //     activetedGiftModal();
//     // }, 10)
//
//     $("[data-modal-gift-close], [data-overlay-all-transparent]").on("click", function () {
//         deactivatedGiftModal();
//
//     });
//
//     function activetedGiftModal() {
//         modalGift.addClass("active");
//         overlayAllTransparent.addClass("active");
//
//     }
//
//     function deactivatedGiftModal() {
//         modalGift.removeClass("active");
//         overlayAllTransparent.removeClass("active");
//
//     }
//
//     if (globParam.windowWidth() < globParam.getMediaSize().PHONES) {
//
//         $("[data-seminar-page-column=\"1\"]").append($("[data-seminar-item-pos=\"3\"]"));
//         $("[data-seminar-page-column=\"2\"]").prepend($("[data-seminar-item-pos=\"2\"]"));
//
//     }
//
//     $("[data-random-main-wrap]").outerHeight(innerHeight);
//     $("[data-random-main-wrap]").outerWidth(innerWidth);
//
//
// }
//
// document.addEventListener("DOMContentLoaded", DOMready);
//
//
//
//

//
//




"use strict";

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

    $("[data-header-burger]").on("click", function() {
        $(this).toggleClass("active"), $("[data-mobile-menu]").toggleClass("active"), $("html").toggleClass("overflow-hidden")
    });


    $("[data-note-box-close]").on("click", function() {
        console.log($(this).closest("[data-note-box]")), $(this).closest("[data-note-box]").fadeOut(300)
    });

    let modalGift = $("[data-modal-main-wrap='gift']");
    let overlayAllTransparent = $("[data-overlay-all-transparent]");

    setTimeout(function () {
        activetedGiftModal();
    }, 1000)

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

    if (globParam.windowWidth() < globParam.getMediaSize().PHONES && $("[data-seminar-page-column=\"1\"]").length > 0 ) {

        $("[data-seminar-page-column=\"1\"]").append($("[data-seminar-item-pos=\"3\"]"));
        $("[data-seminar-page-column=\"2\"]").prepend($("[data-seminar-item-pos=\"2\"]"));

    }

}
document.addEventListener("DOMContentLoaded", DOMready);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiRE9NcmVhZHkiLCIkIiwib24iLCJ0aGlzIiwidG9nZ2xlQ2xhc3MiLCJmYWRlT3V0Iiwic2V0VGltZW91dCIsImZhZGVJbiIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZXN0IiwidGltZXJOb3RlIiwiZWxlbWVudCIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImNsZWFyVGltZW91dCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6ImFBRUEsU0FBQUEsV0FLQUMsRUFBQSx3QkFBQUMsR0FBQSxRQUFBLFdBQ0FELEVBQUFFLE1BQUFDLFlBQUEsVUFDQUgsRUFBQSxzQkFBQUcsWUFBQSxVQUNBSCxFQUFBLFFBQUFHLFlBQUEscUJBTUFILEVBQUEsbUJBQUFJLFFBQUEsR0FDQUMsV0FBQSxXQUNBTCxFQUFBLHlCQUFBTSxPQUFBLE1BQ0EsS0FJQU4sRUFBQSx5QkFBQUMsR0FBQSxRQUFBLFdBQ0FNLFFBQUFDLElBQUFSLEVBQUFFLE1BQUFPLFFBQUEsb0JBQ0FULEVBQUFFLE1BQUFPLFFBQUEsbUJBQUFMLFFBQUEsT0FHQSxJQUNBTSxFQURBQyxFQUFBWCxFQUFBLDJCQUdBQSxFQUFBWSxRQUFBQyxPQUFBLFdBQ0EsS0FBQWIsRUFBQUUsTUFBQVksWUFHQUosRUFBQUwsV0FBQSxXQUNBTSxFQUFBTCxVQUNBLE1BRUFTLGFBQUFMLEdBQ0FDLEVBQUFQLGFBT0FZLFNBQUFDLGlCQUFBLG1CQUFBbEIiLCJmaWxlIjoibWFpbi1taW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyI7XHJcblxyXG5mdW5jdGlvbiBET01yZWFkeSgpIHtcclxuXHJcblxyXG5cclxuXHJcbiAgICAkKFwiW2RhdGEtaGVhZGVyLWJ1cmdlcl1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiW2RhdGEtbW9iaWxlLW1lbnVdXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCJodG1sXCIpLnRvZ2dsZUNsYXNzKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG5cclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIltkYXRhLW5vdGUtYm94XVwiKS5mYWRlT3V0KDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIltkYXRhLW5vdGUtYm94PVxcXCJ0b3BcXFwiXVwiKS5mYWRlSW4oMzAwKTtcclxuICAgIH0sIDMwMDApXHJcblxyXG5cclxuXHJcbiAgICAkKFwiW2RhdGEtbm90ZS1ib3gtY2xvc2VdXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuY2xvc2VzdChcIltkYXRhLW5vdGUtYm94XVwiKSk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiW2RhdGEtbm90ZS1ib3hdXCIpLmZhZGVPdXQoMzAwKTtcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGVsZW1lbnQgPSAkKFwiW2RhdGEtbm90ZS1ib3g9XFxcIm90aGVyXFxcIl1cIiksIGRpc3BsYXk7XHJcbiAgICBsZXQgdGltZXJOb3RlO1xyXG5cclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BsYXkgPSAkKHRoaXMpLnNjcm9sbFRvcCgpID49IDI1MDtcclxuICAgICAgICBpZihkaXNwbGF5KXtcclxuXHJcbiAgICAgICAgICB0aW1lck5vdGUgPSAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5mYWRlSW4oKTtcclxuICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyTm90ZSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZhZGVPdXQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBET01yZWFkeSk7XHJcblxyXG5cclxuXHJcbiJdfQ==