
$(document).ready(function(e) {
	
	try{
		AOS.init({
			once: true,
			duration: 1000
		});
	}catch{}
	
	try{
		if(IS_CARD){
			$('.owl-carousel').owlCarousel({
				nav: true,
				navClass: ["btn-prev-gallery", "btn-next-gallery"],
				navText: "",
				lazyLoad:true,
				items:1
			})
		}
	}catch{}
	
	$('[data-bs-toggle="tooltip"]').tooltip('show');
	
	
	
	//상단 sticky header
	$(window).scroll(function(){
		var height=$(document).scrollTop();
		if(height>100){
			$('.sticky-header').css("position", "fixed");
			$('.sticky-header').css("width", "100%");
			$('.sticky-header').css("top", "0");
		}else{
			$('.sticky-header').css("position", "relative");
			$('.sticky-header').css("top", "auto");
		}
	})
	
	
	setTimeout(function(){
        $('[data-bs-toggle="tooltip"]').tooltip('hide').tooltip('disable');
    }, 1400);
	
	$('img[usemap]').rwdImageMaps();
	$('img[usemap]').width("100%");
	
	$('.form-check-circle').each(function(){
		if($(this).is(":checked")) {
			if($(this).parent().nextAll().eq(1).length != 0) {
				$(this).parent().nextAll().eq(0).removeClass("mb-0");
				$(this).parent().nextAll().eq(1).removeAttr('style');
				$(this).parent().nextAll().eq(2).removeAttr('style');
				$(this).parent().nextAll().eq(3).removeAttr('style');
			}
		} else {
			$(this).parent().nextAll().eq(0).addClass("mb-0");
			$(this).parent().nextAll().eq(1).css("display","none");
			$(this).parent().nextAll().eq(2).css("display","none");
			$(this).parent().nextAll().eq(3).css("display","none");
		}
	});

	
	
	
	$('.form-check-circle').change(function() {
		if($(this).is(":checked")) {
			if($(this).parent().nextAll().eq(1).length != 0) {
				$(this).parent().nextAll().eq(0).removeClass("mb-0");
				$(this).parent().nextAll().eq(1).removeAttr('style');
				$(this).parent().nextAll().eq(2).removeAttr('style');
				$(this).parent().nextAll().eq(3).removeAttr('style');
			}
		} else {
			$(this).parent().nextAll().eq(0).addClass("mb-0");
			$(this).parent().nextAll().eq(1).css("display","none");
			$(this).parent().nextAll().eq(2).css("display","none");
			$(this).parent().nextAll().eq(3).css("display","none");
		}
	});
	
	$('#quote .card-body').click(function() {
		//탭 제거
		var quote = $(this).text().replace(/\t/gi, "");
		
		//처음 줄바꿈 제거
		$("textarea[name=quote]").val(quote.replace(/^\s*/, ""));
	});
	
	
	
	$('#showSketchMap').change(function() {
		if($(this).is(":checked")) {
			$(this).parents().eq(2).nextAll().eq(0).children().first().addClass("show");
		} else {
			$(this).parents().eq(2).nextAll().eq(0).children().first().removeClass("show");
		}
	});
	
	$('#showNaverMap').change(function() {
		if($(this).is(":checked")) {
			$('.naver-map-content').addClass("show");
			$(this).parents().eq(2).nextAll().eq(0).children().first().addClass("show");
		} else {
			$('.naver-map-content').removeClass("show");
			$(this).parents().eq(2).nextAll().eq(0).children().first().removeClass("show");
		}
	});
	
	
	
	
	
	$('#showSketchMap').each(function() {
		if($(this).is(":checked")) {
			$(this).parents().eq(2).nextAll().eq(0).children().first().addClass("show");
		} else {
			$(this).parents().eq(2).nextAll().eq(0).children().first().removeClass("show");
		}
	});
	
	$('#showWayToCome').change(function() {
		if($(this).is(":checked")) {
			$(this).parents().eq(2).nextAll().eq(0).addClass("show");
		} else {
			$(this).parents().eq(2).nextAll().eq(0).removeClass("show");
		}
	});
	
	$('#showWayToCome').each(function() {
		if($(this).is(":checked")) {
			$(this).parents().eq(2).nextAll().eq(0).addClass("show");
		} else {
			$(this).parents().eq(2).nextAll().eq(0).removeClass("show");
		}
	});
	

	
	$('#greetingImage').change(function() {
		if($(this).is(":checked")) {
			$(this).parents().eq(2).nextAll().eq(0).children().first().addClass("show");
		} else {
			$(this).parents().eq(2).nextAll().eq(0).children().first().removeClass("show");
		}
	});
	
	$('#greetingImage').each(function() {
		if($(this).is(":checked")) {
			$(this).parents().eq(2).nextAll().eq(0).children().first().addClass("show");
		} else {
			$(this).parents().eq(2).nextAll().eq(0).children().first().removeClass("show");
		}
	});
	
	
	$('select').on('change', function() {
		$(this).addClass("select-color");
	});
	
	$('#showCustomerCenter').on('change', function() {
		if($(this).is(":checked")) {
			$('.hall-call-number-form').css('display', 'block');
		}else{
			$('.hall-call-number-form').css('display', 'none');
		}
	});
	

	
	$('.item-is-attendance').on('change', function() {
		if($(this).is(":checked")) {
			$('#attendance-alert').prop('checked',true);
			$('.attendance-message-wrap').css("display", "block");
		} else {
			$('#attendance-alert').prop('checked',false);
			$('.attendance-message-wrap').css("display", "none");
		}
	});
	

	
	$('#groomdeceased1').on('change', function() {
		if($(this).is(":checked")) {
			$('#groomdeceased11').prop('checked',false);
		}
	});
	
	$('#groomdeceased11').on('change', function() {
		if($(this).is(":checked")) {
			$('#groomdeceased1').prop('checked',false);
		}
	});
	
	$('#groomdeceased2').on('change', function() {
		if($(this).is(":checked")) {
			$('#groomdeceased22').prop('checked',false);
		}
	});
	
	$('#groomdeceased22').on('change', function() {
		if($(this).is(":checked")) {
			$('#groomdeceased2').prop('checked',false);
		}
	});
	
	$('#bridedeceased1').on('change', function() {
		if($(this).is(":checked")) {
			$('#bridedeceased11').prop('checked',false);
		}
	});
	
	$('#bridedeceased11').on('change', function() {
		if($(this).is(":checked")) {
			$('#bridedeceased1').prop('checked',false);
		}
	});
	
	$('#bridedeceased2').on('change', function() {
		if($(this).is(":checked")) {
			$('#bridedeceased22').prop('checked',false);
		}
	});
	
	$('#bridedeceased22').on('change', function() {
		if($(this).is(":checked")) {
			$('#bridedeceased2').prop('checked',false);
		}
	});

	$('#guest_book_list').on('show.bs.modal', function(event) {
		$('#guest_book_delete .btn-close').attr('data-bs-toggle', 'modal');
		$('#guest_book_delete .btn-close').attr('data-bs-target', '#guest_book_list');
		$('#guest_book_delete .btn-close').removeAttr('data-bs-dismiss');
	});
	

	
    $("#main-menu a").each(function () {
        var pageUrl = window.location.href.split(/[?#]/)[0];
        if (this.href == pageUrl) {
            $(this).addClass("is-active");
        }
    });
	
	
	
	
});	

function message(msg=''){
	notif({
		msg: msg,
		position: "center"
	});
}
