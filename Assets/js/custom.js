setInterval(function() {
    //location.reload();
}, 2000);

$(function(){

	document.addEventListener("deviceready", function(){

		document.addEventListener('hidekeyboard', function(){
			console.log("keyboard hide");
		}, false);
    	document.addEventListener('showkeyboard', function(){
    		console.log("keyboard show");
    	}, false);

	});

	var swiper = new Swiper('.swiper-container', {
	      slidesPerView: "auto",
	      freeMode: true,
	      speed: 350
	});

	$("#picker").drawrpalette();

	var _gColor = $("#picker").val();

	$("#picker").drawrpalette()
	.on("preview.drawrpalette",function(event,hexcolor){
	  // when picking a color
	  //console.log(hexcolor);

	  _gColor = hexcolor;
  	  var rgba = hexToRgb(hexcolor);

	  var _boxShadow = "inset 0 -130px 100px -50px rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + ",0.75)";
	  //console.log(_boxShadow);
	  $(".ucp_user_thumb .user_img .color-overlay").css("box-shadow", _boxShadow);

	}).on("close.drawrpalette",function(){
	  $(".drawrpallete-wrapper > button").css("background-color", _gColor);
	  $(this).val(_gColor);
	  //console.log("closed" + _gColor);
	});


	var _bgShadowColor = [
							"rgba(198,140,125,0.75)",
							"rgba(57,60,58,0.75)",
							"rgba(54,45,49,0.75)",
							"rgba(122,131,155,0.75)",
							"rgba(162,108,86,0.75)",
							"rgba(21,24,26,0.75)",
							"rgba(96,95,97,0.75)"
						];

	$(".ucp_tile:not(:first) .tile_img").each(function(i, e){

		$(this).find(".tile_overlay").css("box-shadow", "inset 0 -35px 20px -20px " + _bgShadowColor[i]);

	});

	$(".ucp_user_thumb .user_img button.upc_btn_upload").on("click", function(){

		console.log("CLicked");
		$(this).prop("disabled", true).removeClass("disabled");

	});

	setTimeout(function(){

		$(".preloader").addClass("deactive");
		$(".container-fluid").animate({opacity: "1"}, 500);

	}, 1200);


});

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}