$(function() {

  var Divs = $(".small_box_phones");
  var url = "http://localhost:3000/products"
  var divs = $(".box_phones");

  divs.on("mouseenter", "div", function() {
    var visible = $(this).find($(".visible"));
    var hidden = $(this).find($(".hidden"));

    visible.css("visibility", "hidden");
    hidden.css({"visibility": "visible", "margin-top": "-415px"});
  });
  divs.on("mouseleave", "div", function() {
    console.log($(this));
    var visible = $(this).find($(".visible"));
    var hidden = $(this).find($(".hidden"));
    visible.css("visibility", "visible");
    hidden.css("visibility", "hidden");
  });

  var cnt = 0
  $("#load").on("click", function() {
    if (cnt === 0) {
      $.ajax({method: "GET", url: url, dataType: "json"}).done(function(response) {
        for (var i = 0; i < 3; i++) {
          console.log(response[i]);
          console.log(response[i].name);
          console.log(response[i].information);
          console.log(response[i].price);
          var imgUrl = response[i].image;
          var boxPhones = ($(".box_phones"));
          var newDiv = $("<div>");
          var nextDiv = $("<div>");
          var lastDiv = $("<div>");
          var h = $("<h4>");
          var nextH = $("<h4>");
          var img = $("<img>");
          var thirdH = $("<h4>");
          var spanOne = $("<span>");
          var spanTwo = $("<span>");
          var spanThree = $("<span>");
          var spanFour = $("<span>");
          var lastH = $("<h4>");
          var button = $("<button>");
          var lastButton = $("<button>");
          var lastImg = $("<img>");
          boxPhones.append(newDiv);
          newDiv.addClass("small_box_phones");
          newDiv.append(nextDiv);
          nextDiv.addClass("visible");
          nextDiv.append(h);
          nextDiv.append(img);
          nextDiv.append(nextH);
          h.text(response[i].name);
          img.attr("src", "images/" + imgUrl);
          nextH.text(response[i].price.value + " " + response[i].price.currency);
          newDiv.append(lastDiv);
          lastDiv.addClass("hidden");
          lastDiv.append(thirdH);
          thirdH.text(response[i].name);
          lastDiv.append(spanOne);
          lastDiv.append(spanTwo);
          lastDiv.append(spanThree);
          lastDiv.append(spanFour);
          lastDiv.append(lastH);
          lastDiv.append(button);
          lastDiv.append(lastButton);
          button.append(lastImg);
          spanOne.text("EKRAN" +
            " " + response[i].information.display);
          spanTwo.text("APARAT" +
            " " + response[i].information.camera);
          spanThree.text("BATERIA" +
            " " + response[i].information.battery);
          spanFour.text(response[i].information.memory);
          lastH.text(response[i].price.value + " " + response[i].price.currency);
          lastButton.text("PORÓWNAJ");
          lastImg.attr("src", "images/icon cart.svg");
        }
      });
      cnt++;
    } else if (cnt === 1) {
      $.ajax({method: "GET", url: url, dataType: "json"}).done(function(response) {
        for (var i = 3; i < 6; i++) {
          console.log(response[i]);
          console.log(response[i].name);
          console.log(response[i].information);
          console.log(response[i].price);
          var imgUrl = response[i].image;
          var boxPhones = ($(".box_phones"));
          var newDiv = $("<div>");
          var nextDiv = $("<div>");
          var lastDiv = $("<div>");
          var h = $("<h4>");
          var nextH = $("<h4>");
          var img = $("<img>");
          var thirdH = $("<h4>");
          var spanOne = $("<span>");
          var spanTwo = $("<span>");
          var spanThree = $("<span>");
          var spanFour = $("<span>");
          var lastH = $("<h4>");
          var button = $("<button>");
          var lastButton = $("<button>");
          var lastImg = $("<img>");
          boxPhones.append(newDiv);
          newDiv.addClass("small_box_phones");
          newDiv.append(nextDiv);
          nextDiv.addClass("visible");
          nextDiv.append(h);
          nextDiv.append(img);
          nextDiv.append(nextH);
          h.text(response[i].name);
          img.attr("src", "images/" + imgUrl);
          nextH.text(response[i].price.value + " " + response[i].price.currency);
          newDiv.append(lastDiv);
          lastDiv.addClass("hidden");
          lastDiv.append(thirdH);
          thirdH.text(response[i].name);
          lastDiv.append(spanOne);
          lastDiv.append(spanTwo);
          lastDiv.append(spanThree);
          lastDiv.append(spanFour);
          lastDiv.append(lastH);
          lastDiv.append(button);
          lastDiv.append(lastButton);
          button.append(lastImg);
          spanOne.text("EKRAN" +
            " " + response[i].information.display);
          spanTwo.text("APARAT" +
            " " + response[i].information.camera);
          spanThree.text("BATERIA" +
            " " + response[i].information.battery);
          spanFour.text(response[i].information.memory);
          lastH.text(response[i].price.value + " " + response[i].price.currency);
          lastButton.text("PORÓWNAJ");
          lastImg.attr("src", "images/icon cart.svg");
        }
        cnt++;
      });

    }
  });

  var input = $("<input>");
  input.attr("placeholder", "Wyszukaj...");
  var search = $(".box").find("img").eq(1);
  console.log(search);
  var counter = 0;
  search.on("click", function() {
    if (counter % 2 === 0) {
      $(".box ul").hide();
      $(".box img").eq(0).after(input);
      input.css("margin-left", "620px");

      counter++;
    } else {
      var inp = $(".box input").val();
      console.log(inp);
      if (inp === "") {
        $(".box ul").show();
        $(".box input").remove();
        counter++;
      } else {
        alert("input field has to be empty if you want hide search icon");
        counter = counter + 2;
      }
    }
  });

  $(".box").on("change", "input", function() {
    var all = $(".visible");
    $(".small_box_phones").hide();
    var a = all.find("h4");
    console.log(a);
    var inp = $(this).val();
    console.log(inp);
    for (var i = 0; i < a.length; i++) {
      console.log($(a[i]).text());
      if ($(a[i]).text() === inp) {
        $(a[i]).parent().parent().show();

      }

    }
  });




  var stickyNavTop = $('.nav').offset().top;

  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();

  if (scrollTop > stickyNavTop) {
      $('.nav').addClass('sticky');
  } else {
      $('.nav').removeClass('sticky');
  }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  }); 



















});
