$(".js-open-modal").click((function(){var s=$(this).attr("data-modal");$('.js-modal[data-modal="'+s+'"]').addClass("is-shown"),$(".js-modal-overlay").addClass("is-shown")})),$(".js-modal-close").click((function(){$(this).parent(".js-modal").removeClass("is-shown"),$(".js-modal-overlay").removeClass("is-shown")})),$(".js-modal-overlay").click((function(){$(".js-modal.is-shown").removeClass("is-shown"),$(this).removeClass("is-shown")}));document.getElementById("nights"),document.getElementById("price"),document.getElementById("form"),document.getElementById("error");
//# sourceMappingURL=restaurants.83c4aa4b.js.map
