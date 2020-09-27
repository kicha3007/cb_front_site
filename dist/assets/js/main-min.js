"use strict";function DOMready(){var a,e=(a={DESKTOP:"1199",LAPTOP:"991",TABLETS:"767",PHONES:"575"},{getMediaSize:function(){return a},windowWidth:function(){return $(window).width()}});$("[data-header-burger]").on("click",function(){$(this).toggleClass("active"),$("[data-mobile-menu]").toggleClass("active"),$("html").toggleClass("overflow-hidden")}),$("[data-note-box-close]").on("click",function(){console.log($(this).closest("[data-note-box]")),$(this).closest("[data-note-box]").fadeOut(300)});i=1300,o=700;var t=innerHeight,n=i/(o/t);o<t&&(t=o),i<n&&(n=i),$("#gameBox").css({width:n+"px",height:t+"px"}),$("#gameContainer").css({width:n+"px",height:t+"px"}),$("#start_game").click(function(){$.ajax({method:"GET",url:"/igra_ajax.php"}).done(function(a){$("#game_script").html(a)})});var i=1300,o=700,d=(window.screen.availHeight,document.documentElement.scrollWidth,$("#modal-gift")),r=$("[data-overlay-all-transparent]");$("[data-modal-gift-close], [data-overlay-all-transparent]").on("click",function(){d.removeClass("active"),r.removeClass("active")}),e.windowWidth()<e.getMediaSize().PHONES&&($('[data-seminar-page-column="1"]').append($('[data-seminar-item-pos="3"]')),$('[data-seminar-page-column="2"]').prepend($('[data-seminar-item-pos="2"]'))),$("[data-random-main-wrap]").outerHeight(innerHeight),$("[data-random-main-wrap]").outerWidth(innerWidth)}document.addEventListener("DOMContentLoaded",DOMready);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiRE9NcmVhZHkiLCJzaXplcyIsImdsb2JQYXJhbSIsIkRFU0tUT1AiLCJMQVBUT1AiLCJUQUJMRVRTIiwiUEhPTkVTIiwiZ2V0TWVkaWFTaXplIiwid2luZG93V2lkdGgiLCIkIiwid2luZG93Iiwid2lkdGgiLCJvbiIsInRoaXMiLCJ0b2dnbGVDbGFzcyIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZXN0IiwiZmFkZU91dCIsImRlZmF1bHRfd2lkdGgiLCJkZWZhdWx0X2hlaWdodCIsIm1vYmlsZV9oZWlnaHQiLCJpbm5lckhlaWdodCIsIm1vYmlsZV93aWR0aCIsImNzcyIsImhlaWdodCIsImNsaWNrIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRvbmUiLCJtc2ciLCJodG1sIiwibW9kYWxHaWZ0Iiwic2NyZWVuIiwiYXZhaWxIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFdpZHRoIiwib3ZlcmxheUFsbFRyYW5zcGFyZW50IiwicmVtb3ZlQ2xhc3MiLCJhcHBlbmQiLCJwcmVwZW5kIiwib3V0ZXJIZWlnaHQiLCJvdXRlcldpZHRoIiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJhQUVBLFNBQUFBLFdBR0EsSUFDQUMsRUFEQUMsR0FDQUQsRUFBQSxDQUNBRSxRQUFBLE9BQ0FDLE9BQUEsTUFDQUMsUUFBQSxNQUNBQyxPQUFBLE9BR0EsQ0FDQUMsYUFBQSxXQUNBLE9BQUFOLEdBRUFPLFlBQUEsV0FDQSxPQUFBQyxFQUFBQyxRQUFBQyxXQU1BRixFQUFBLHdCQUFBRyxHQUFBLFFBQUEsV0FDQUgsRUFBQUksTUFBQUMsWUFBQSxVQUNBTCxFQUFBLHNCQUFBSyxZQUFBLFVBQ0FMLEVBQUEsUUFBQUssWUFBQSxxQkFJQUwsRUFBQSx5QkFBQUcsR0FBQSxRQUFBLFdBQ0FHLFFBQUFDLElBQUFQLEVBQUFJLE1BQUFJLFFBQUEsb0JBQ0FSLEVBQUFJLE1BQUFJLFFBQUEsbUJBQUFDLFFBQUEsT0FnQkFDLEVBQUEsS0FDQUMsRUFBQSxJQUNBLElBRUFDLEVBQUFDLFlBQ0FDLEVBQUFKLEdBQUFDLEVBQUFDLEdBQ0FELEVBQUFDLElBQUFBLEVBQUFELEdBQ0FELEVBQUFJLElBQUFBLEVBQUFKLEdBQ0FWLEVBQUEsWUFBQWUsSUFBQSxDQUFBYixNQUFBWSxFQUFBLEtBQUFFLE9BQUFKLEVBQUEsT0FDQVosRUFBQSxrQkFBQWUsSUFBQSxDQUFBYixNQUFBWSxFQUFBLEtBQUFFLE9BQUFKLEVBQUEsT0FFQVosRUFBQSxlQUFBaUIsTUFBQSxXQUVBakIsRUFBQWtCLEtBQUEsQ0FDQUMsT0FBQSxNQUNBQyxJQUFBLG1CQUVBQyxLQUFBLFNBQUFDLEdBQ0F0QixFQUFBLGdCQUFBdUIsS0FBQUQsT0FNQSxJQUFBWixFQUFBLEtBQ0FDLEVBQUEsSUF1QkFhLEdBckJBdkIsT0FBQXdCLE9BQUFDLFlBQ0FDLFNBQUFDLGdCQUFBQyxZQW9CQTdCLEVBQUEsZ0JBQ0E4QixFQUFBOUIsRUFBQSxrQ0FNQUEsRUFBQSwyREFBQUcsR0FBQSxRQUFBLFdBWUFxQixFQUFBTyxZQUFBLFVBQ0FELEVBQUFDLFlBQUEsWUFJQXRDLEVBQUFNLGNBQUFOLEVBQUFLLGVBQUFELFNBRUFHLEVBQUEsa0NBQUFnQyxPQUFBaEMsRUFBQSxnQ0FDQUEsRUFBQSxrQ0FBQWlDLFFBQUFqQyxFQUFBLGlDQUlBQSxFQUFBLDJCQUFBa0MsWUFBQXJCLGFBQ0FiLEVBQUEsMkJBQUFtQyxXQUFBQyxZQUtBVCxTQUFBVSxpQkFBQSxtQkFBQTlDIiwiZmlsZSI6Im1haW4tbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiO1xyXG5cclxuZnVuY3Rpb24gRE9NcmVhZHkoKSB7XHJcblxyXG4gICAgLy8g0JPQu9C+0LHQsNC70YzQvdGL0LUg0L3QsNGB0YLRgNC+0LnQutC4XHJcbiAgICB2YXIgZ2xvYlBhcmFtID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2l6ZXMgPSB7XHJcbiAgICAgICAgICAgIERFU0tUT1A6IFwiMTE5OVwiLFxyXG4gICAgICAgICAgICBMQVBUT1A6IFwiOTkxXCIsXHJcbiAgICAgICAgICAgIFRBQkxFVFM6IFwiNzY3XCIsXHJcbiAgICAgICAgICAgIFBIT05FUzogXCI1NzVcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGdldE1lZGlhU2l6ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpemVzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3aW5kb3dXaWR0aDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgJChcIltkYXRhLWhlYWRlci1idXJnZXJdXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcIltkYXRhLW1vYmlsZS1tZW51XVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiaHRtbFwiKS50b2dnbGVDbGFzcyhcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiW2RhdGEtbm90ZS1ib3gtY2xvc2VdXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuY2xvc2VzdChcIltkYXRhLW5vdGUtYm94XVwiKSk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiW2RhdGEtbm90ZS1ib3hdXCIpLmZhZGVPdXQoMzAwKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gbGV0IGRlZmF1bHRfd2lkdGggPSAxMzAwO1xyXG4gICAgLy8gbGV0IGRlZmF1bHRfaGVpZ2h0ID0gNzAwO1xyXG5cclxuICAgIC8vIGxldCByZWFsSGVpZ2h0RG9jID0gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodDtcclxuICAgIC8vIGxldCByZWFsV2lkdGhEb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XHJcblxyXG4gICAgLy8gaWYocmVhbFdpZHRoRG9jIDwgZGVmYXVsdF93aWR0aCApIHtcclxuICAgIC8vICAgICBsZXQgbmV3SGVpZ2h0ID0gKHJlYWxXaWR0aERvYyAvIGRlZmF1bHRfd2lkdGgpICogZGVmYXVsdF9oZWlnaHQ7XHJcbiAgICAvLyAgICAgJChcIiNnYW1lQ29udGFpbmVyXCIpLmNzcyh7IFwiaGVpZ2h0XCI6bmV3SGVpZ2h0K1wicHhcIn0pO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICAkKFwiI2dhbWVDb250YWluZXJcIikuY3NzKHsgXCJ3aWR0aFwiOmRlZmF1bHRfd2lkdGgrXCJweFwiLCBcImhlaWdodFwiOmRlZmF1bHRfaGVpZ2h0K1wicHhcIn0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGRlZmF1bHRfd2lkdGggPSAxMzAwO1xyXG4gICAgZGVmYXVsdF9oZWlnaHQgPSA3MDA7XHJcbiAgICBsZXQgZGVmYXVsdF9wcm9wb3J0aW9ucyA9IGRlZmF1bHRfd2lkdGggLyBkZWZhdWx0X2hlaWdodDtcclxuXHJcbiAgICBsZXQgbW9iaWxlX2hlaWdodCA9IGlubmVySGVpZ2h0O1xyXG4gICAgbGV0IG1vYmlsZV93aWR0aCA9IGRlZmF1bHRfd2lkdGggLyAoZGVmYXVsdF9oZWlnaHQgLyBtb2JpbGVfaGVpZ2h0KTtcclxuICAgIGlmIChtb2JpbGVfaGVpZ2h0ID4gZGVmYXVsdF9oZWlnaHQpIG1vYmlsZV9oZWlnaHQgPSBkZWZhdWx0X2hlaWdodDtcclxuICAgIGlmIChtb2JpbGVfd2lkdGggPiBkZWZhdWx0X3dpZHRoKSBtb2JpbGVfd2lkdGggPSBkZWZhdWx0X3dpZHRoO1xyXG4gICAgJChcIiNnYW1lQm94XCIpLmNzcyh7XCJ3aWR0aFwiOiBtb2JpbGVfd2lkdGggKyBcInB4XCIsIFwiaGVpZ2h0XCI6IG1vYmlsZV9oZWlnaHQgKyBcInB4XCJ9KTtcclxuICAgICQoXCIjZ2FtZUNvbnRhaW5lclwiKS5jc3Moe1wid2lkdGhcIjogbW9iaWxlX3dpZHRoICsgXCJweFwiLCBcImhlaWdodFwiOiBtb2JpbGVfaGVpZ2h0ICsgXCJweFwifSk7XHJcblxyXG4gICAgJChcIiNzdGFydF9nYW1lXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL2lncmFfYWpheC5waHBcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgICAuZG9uZShmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgICAgICAkKFwiI2dhbWVfc2NyaXB0XCIpLmh0bWwobXNnKTtcclxuXHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBkZWZhdWx0X3dpZHRoID0gMTMwMDtcclxuICAgIGxldCBkZWZhdWx0X2hlaWdodCA9IDcwMDtcclxuXHJcbiAgICBsZXQgcmVhbEhlaWdodERvYyA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQ7XHJcbiAgICBsZXQgcmVhbFdpZHRoRG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xyXG5cclxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHJlYWxIZWlnaHREb2MgPiByZWFsV2lkdGhEb2MpIHtcclxuICAgIC8vICAgICAgICAgICAgICQoXCJbZGF0YS1nYW1lLXBhZ2VdXCIpLmFkZENsYXNzKFwibW9iaWxlXCIpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBhbGVydChcIlBPUlRSQUlUXCIpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7XHJcbiAgICAvLyAgICAgICAgIGFsZXJ0KFwiTEFOU0NBUEVcIilcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LCBmYWxzZSk7XHJcblxyXG4gICAgLy8gaWYgKHJlYWxIZWlnaHREb2MgPiByZWFsV2lkdGhEb2MpIHtcclxuICAgIC8vICAgICAkKFwiW2RhdGEtZ2FtZS1wYWdlXVwiKS5hZGRDbGFzcyhcIm1vYmlsZVwiKTtcclxuICAgIC8vXHJcbiAgICAvLyB9XHJcblxyXG4gICAgbGV0IG1vZGFsR2lmdCA9ICQoXCIjbW9kYWwtZ2lmdFwiKTtcclxuICAgIGxldCBvdmVybGF5QWxsVHJhbnNwYXJlbnQgPSAkKFwiW2RhdGEtb3ZlcmxheS1hbGwtdHJhbnNwYXJlbnRdXCIpO1xyXG5cclxuICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgIGFjdGl2ZXRlZEdpZnRNb2RhbCgpO1xyXG4gICAgLy8gfSwgMTApXHJcblxyXG4gICAgJChcIltkYXRhLW1vZGFsLWdpZnQtY2xvc2VdLCBbZGF0YS1vdmVybGF5LWFsbC10cmFuc3BhcmVudF1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGVhY3RpdmF0ZWRHaWZ0TW9kYWwoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmV0ZWRHaWZ0TW9kYWwoKSB7XHJcbiAgICAgICAgbW9kYWxHaWZ0LmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIG92ZXJsYXlBbGxUcmFuc3BhcmVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZWRHaWZ0TW9kYWwoKSB7XHJcbiAgICAgICAgbW9kYWxHaWZ0LnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIG92ZXJsYXlBbGxUcmFuc3BhcmVudC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdsb2JQYXJhbS53aW5kb3dXaWR0aCgpIDwgZ2xvYlBhcmFtLmdldE1lZGlhU2l6ZSgpLlBIT05FUykge1xyXG5cclxuICAgICAgICAkKFwiW2RhdGEtc2VtaW5hci1wYWdlLWNvbHVtbj1cXFwiMVxcXCJdXCIpLmFwcGVuZCgkKFwiW2RhdGEtc2VtaW5hci1pdGVtLXBvcz1cXFwiM1xcXCJdXCIpKTtcclxuICAgICAgICAkKFwiW2RhdGEtc2VtaW5hci1wYWdlLWNvbHVtbj1cXFwiMlxcXCJdXCIpLnByZXBlbmQoJChcIltkYXRhLXNlbWluYXItaXRlbS1wb3M9XFxcIjJcXFwiXVwiKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICQoXCJbZGF0YS1yYW5kb20tbWFpbi13cmFwXVwiKS5vdXRlckhlaWdodChpbm5lckhlaWdodCk7XHJcbiAgICAkKFwiW2RhdGEtcmFuZG9tLW1haW4td3JhcF1cIikub3V0ZXJXaWR0aChpbm5lcldpZHRoKTtcclxuXHJcblxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBET01yZWFkeSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==
