$(function()	{

var Divs = $(".small_box_phones");
console.log(Divs);
Divs.on("mouseenter",function(){
  console.log($(this));
 $(".visible").css("visibility","hidden");
 $(".hidden").css({"visibility":"visible",
                   "margin-top":"-415px",
                    
                   "height":"450px;"
                                 });
});



});
