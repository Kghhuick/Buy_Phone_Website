$(function()	{

var Divs = $(".small_box_phones");

Divs.on("mouseenter",function(){
  var visible = $(this).find($(".visible"));
  var hidden = $(this).find($(".hidden"));

 visible.css("visibility","hidden");
 hidden.css({"visibility":"visible",
                   "margin-top":"-415px"});
});
Divs.on("mouseleave",function(){
console.log($(this));
var visible = $(this).find($(".visible"));
var hidden = $(this).find($(".hidden"));
 visible.css("visibility","visible");
 hidden.css("visibility","hidden");
});



});
