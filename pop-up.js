var fun1;
var fun2;

$(function() {

	var $obj = $(".remodal_wrap");
	var $obj_content = $(".remodal_content");

	var option_flag;
	var outer_flag;

	function open_box() {
		var options = "remodal_1";
		option_flag = options;
		var $outer = $(".out_wrap");
		var len = $outer.length;
		for(var i=0; i<len; i++) {
			if($outer[i].className.indexOf(options) > -1) {
				$($outer[i]).removeClass("out_wrap");
			}
		}
		$obj.css({
			"display": "block",
			"opacity": 0
		});
		$obj.animate({ opacity: 0.9 }, 100, 'linear');
		$obj_content.addClass("content_show");
		
		return false;
	}

	function change() {
			$obj_content.animate({ opacity: 0, scale: 0.7 }, 100, 'linear', function(){
				$obj.animate({
					opacity: "hide"
				}, 200, "linear", function() {
					var len_1 = $obj_content.length;
					for(var i=0; i<len_1; i++) {
						$obj_content[i].style.opacity = 1;
					}
					var len_2 = $obj.length;
					for(var j=0; j<len_2; j++) {
						$obj[j].style.opacity = 0.9;
					}		
					$obj.removeClass("bg_show");
					$obj_content.removeClass("content_show");
					$("." + option_flag).addClass("out_wrap");
				});
			}); 
		// }
	}

	$("body").click(function() {
		change();
	});

	$(".remodal_content").on("click", ".del", function(){
		change();
	});

	$(".remodal_content").on("click", function(){
		return false;
	});

	fun1 = open_box;
	fun2 = change;
});

(function($) {
	var options = {
		showClose: true
	};
	$.modal = function(obj) {
		var obj = $.extend({}, options, obj);
		for(var i in obj) {
			if(typeof obj[i] == "string") {
				$(".inner_content .title").html(obj[i]);
			}else if(i == "confirm") {
				$(".confirm").unbind();
				(function(num) {
					$(".confirm").click(function(){
						obj[num]();
						fun2();
					});	
				})(i);
			}else if(i == "cancel") {
				$(".cancel").unbind();
				(function(num) {
					$(".cancel").click(function(){
						obj[num]();
						fun2();
					});	
				})(i);
			}
		}
		if(!obj.showClose) {
			$(".remodal_1 .del").hide();
		}else {
			$(".remodal_1 .del").show();
		}
		fun1();
	}
})(jQuery);