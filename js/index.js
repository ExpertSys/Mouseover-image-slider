$(document).ready(function(){
    var sliderSpeed = 900;
    var progressBar = $(".slider-progress");

    $(".small-images img").hover(function(){
    $("#img-1").css("opacity", "0.4;");
    var currImage = $('.bigImg').attr("src");
    var imgPath = "./images/" + $(this).attr("src");
    var noRefresh = imgPath.substr(9);
    var getPath = "." + imgPath.substr(8);

    if (currImage === noRefresh){
    } else {
      $(".slider-progress").animate({
          width: "100%"
      }, 1500, function(){
          $(this).animate({
              width: "0%"
          }, 0);
      });
        $(".bigImg").fadeOut(sliderSpeed, function(){
        $(".bigImg").attr("src", getPath).fadeIn(sliderSpeed);
      });
    }
    }, function(){
        return false;
    });
});
