//sous-menu
$("#show-cat1").hover(function () {
  $("#sous-categories4, #sous-categories2, #sous-categories3").animate({
    height: "hide",
  });
  $("#sous-categories1").animate({
    height: "show",
  });
  $("nav").css("background-color", "#cf805e");
  $(".logo-top").css("filter", "brightness(0) invert(1)");
  $(".right-nav li img").css("filter", "brightness(0) invert(1)");
  $("nav a").css("color", "white");
  $(".sticky").css("background", "#cf805e");
  $(".selected").css("filter", "brightness(0) invert(1)");
});
$("#sous-categories1, nav").mouseleave(function () {
  $("#sous-categories1").animate({
    height: "hide",
  });
  $("nav").css("background-color", "transparent");
  $(".logo-top").css("filter", "none");
  $(".right-nav li img").css("filter", "none");
  $("nav a").removeAttr("style");
  $(".sticky").removeAttr("style");
});

$("#close-sous-cat1").click(function () {
  $("#sous-categories1").animate({
    height: "hide",
  });
  $("nav").css("background-color", "transparent");
});

$("#show-cat2").hover(function () {
  $("#sous-categories1, #sous-categories4, #sous-categories3").animate({
    height: "hide",
  });
  $("#sous-categories2").animate({
    height: "show",
  });
  $("nav").css("background-color", "#cf805e");
  $(".logo-top").css("filter", "brightness(0) invert(1)");
  $(".right-nav li img").css("filter", "brightness(0) invert(1)");
  $("nav a").css("color", "white");
  $(".sticky").css("background", "#cf805e");
  $(".selected").css("filter", "brightness(0) invert(1)");
});
$("#sous-categories2, nav").mouseleave(function () {
  $("#sous-categories2").animate({
    height: "hide",
  });
  $("nav").css("background-color", "transparent");
  $(".logo-top").css("filter", "none");
  $(".right-nav li img").css("filter", "none");
  $("nav a").removeAttr("style");
  $(".sticky").removeAttr("style");
});

$("#close-sous-cat2").click(function () {
  $("#sous-categories2").animate({
    height: "hide",
  });
  $("nav").css("background-color", "transparent");
});

$("#show-cat3").hover(function () {
  $("#sous-categories4, #sous-categories2, #sous-categories1").animate({
    height: "hide",
  });
  $("#sous-categories3").animate({
    height: "show",
  });
  $("nav").css("background-color", "#cf805e");
  $(".logo-top").css("filter", "brightness(0) invert(1)");
  $(".right-nav li img").css("filter", "brightness(0) invert(1)");
  $("nav a").css("color", "white");
  $(".sticky").css("background", "#cf805e");
  $(".selected").css("filter", "brightness(0) invert(1)");
});
$("#sous-categories3, nav").mouseleave(function () {
  $("#sous-categories3").animate({
    height: "hide",
  });
  $("nav").css("background-color", "transparent");
  $(".logo-top").css("filter", "none");
  $(".right-nav li img").css("filter", "none");
  $("nav a").removeAttr("style");
  $(".sticky").removeAttr("style");
});

$("#close-sous-cat3").click(function () {
  $("#sous-categories3").animate({
    height: "hide",
  });
  $("nav").css("background-color", "transparent");
});

$("#show-cat4").hover(function () {
  $("#sous-categories1, #sous-categories2, #sous-categories3").animate({
    height: "hide",
  });
  $("#sous-categories4").animate({
    height: "show",
  });
  $("nav").css("background-color", "#cf805e");
  $(".logo-top").css("filter", "brightness(0) invert(1)");
  $(".right-nav li img").css("filter", "brightness(0) invert(1)");
  $("nav a").css("color", "white");
  $(".sticky").css("background", "#cf805e");
  $(".selected").css("filter", "brightness(0) invert(1)");
});
$("#sous-categories4, nav").mouseleave(function () {
  $("#sous-categories4").animate({
    height: "hide",
  });
  $("nav").css("background-color", "transparent");
  $(".logo-top").css("filter", "none");
  $(".right-nav li img").css("filter", "none");
  $("nav a").removeAttr("style");
  $(".sticky").removeAttr("style");
});

$("#close-sous-cat4").click(function () {
  $("#sous-categories4").animate({
    height: "hide",
  });
  $("nav").css("background-color", "transparent");
});

//sticky navbar

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("nav-container");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    $( ".sous-categories").addClass("onscroll-cat");
  } else {
    navbar.classList.remove("sticky");
    $( ".sous-categories").removeClass("onscroll-cat");

  }
}

//product slider

$(document).on("ready", function () {
  $(".center").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 4000,
          infinite: true,
        },
      },
    ],
  });
});
$("#selectedSwitch").on("click", function () {
  var click = $(this).data("clicks");

  var $this = $(this);
  if (click) {
    $("#toShowSwitch").animate({
      height: "hide",
    });
  } else {
    $("#toShowSwitch").animate({
      height: "show",
    });  
    
  }

  $(this).data("clicks", !click);
});
//favories-icon
$(".product").hover(function () {
  $(this).find(".favories").addClass("display-content");
  $(this).find(".favories").removeClass("none-content");
});
$(".product").mouseleave(function () {
  $(this).find(".favories").addClass("none-content");
  $(this).find(".favories").removeClass("display-content");
});

$(".box").hover(function () {
  $(this).find(".favories").addClass("display-content");
  $(this).find(".favories").removeClass("none-content");
});
$(".box").mouseleave(function () {
  $(this).find(".favories").addClass("none-content");
  $(this).find(".favories").removeClass("display-content");
});

//textile phone
$(".lifes").on("click", function () {
  var click = $(this).data("clicks");

  var $this = $(this);
  if (click) {
    $(".derl2").addClass("none-content");
    $(".derl2").removeClass("display-content");
  } else {
    $(".derl2").addClass("display-content");
    $(".derl2").removeClass("none-content");
  }

  $(this).data("clicks", !click);
});

$(".textl").on("click", function () {
  var click = $(this).data("clicks");

  var $this = $(this);
  if (click) {
    $(".derl").addClass("none-content");
    $(".derl").removeClass("display-content");
  } else {
    $(".derl").addClass("display-content");
    $(".derl").removeClass("none-content");
  }

  $(this).data("clicks", !click);
});

$(".colr1").on("click", function () {
  var click = $(this).data("clicks");

  var $this = $(this);
  if (click) {
    $(".colr").animate({
      height: "hide",
    });
    $(".plus1").show();
    $(".moins1").hide();
  } else {
    $(".colr").animate({
      height: "show",
    });
    $(".plus1").hide();
    $(".moins1").show();
  }

  $(this).data("clicks", !click);
});
$(".typ1").on("click", function () {
  var click = $(this).data("clicks");

  var $this = $(this);
  if (click) {
    $(".typ").animate({
      height: "hide",
    });
    $(".plus2").show();
    $(".moins2").hide();
  } else {
    $(".typ").animate({
      height: "show",
    });
    $(".plus2").hide();
    $(".moins2").show();
  }

  $(this).data("clicks", !click);
});

$(".matr1").on("click", function () {
  var click = $(this).data("clicks");

  var $this = $(this);
  if (click) {
    $(".matr").animate({
      height: "hide",
    });
    $(".plus3").show();
    $(".moins3").hide();
  } else {
    $(".matr").animate({
      height: "show",
    });
    $(".plus3").hide();
    $(".moins3").show();
  }

  $(this).data("clicks", !click);
});

$(".pri1").on("click", function () {
  var click = $(this).data("clicks");

  var $this = $(this);
  if (click) {
    $(".pri").animate({
      height: "hide",
    });
    $(".plus4").show();
    $(".moins4").hide();
  } else {
    $(".pri").animate({
      height: "show",
    });
    $(".plus4").hide();
    $(".moins4").show();
  }

  $(this).data("clicks", !click);
});

$("#filtrePopup").click(function () {
  $("#filtres").animate({
    width: "show",
  });
});

$("#close-filtres").click(function () {
  $("#filtres").animate({
    width: "hide",
  });
});

$("#searchInput").change(function () {
  $(".rechercher-container").animate({
    height: "show",
  });
  $(".rechercher-container").css("display", "flex");
});

$("#btn-cat1").click(function () {
    $("#filtreContent .container-3 div").css("display", "none");

  $("#cat1").css("display", "flex ").animate({
    width: "show",
  });
  
  $("#filtreContainer a").removeClass("fitlreSelected");
  $(this).addClass("fitlreSelected");
});

$("#btn-cat2").click(function () {
    $("#filtreContent .container-3 div").css("display", "none");

  $("#cat2").css("display", "flex ").animate({
    width: "show",
  });
    

  
  $("#filtreContainer a").removeClass("fitlreSelected");
  $(this).addClass("fitlreSelected");
});

$("#btn-cat3").click(function () {
    $("#filtreContent .container-3 div").css("display", "none");

  $("#cat3").css("display", "flex ").animate({
    width: "show",
  });
    

  
  $("#filtreContainer a").removeClass("fitlreSelected");
  $(this).addClass("fitlreSelected");
});


$("#btn-cat4").click(function () {
    $("#filtreContent .container-3 div").css("display", "none");

  $("#cat4").css("display", "flex ").animate({
    width: "show",
  });
    

  
  $("#filtreContainer a").removeClass("fitlreSelected");
  $(this).addClass("fitlreSelected");
});

//price slider
setTimeout(init2slider('id66', 'id66b', 'id661', 'id662', 'id66i1', 'id66i2'), 0);

function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
    var slider = document.getElementById(idX);
    var between = document.getElementById(btwX); 
    var button1 = document.getElementById(btn1X);
    var button2 = document.getElementById(btn2X);   
    var inpt1 = document.getElementById(input1); 
    var inpt2 = document.getElementById(input2); 
  	
            var min=inpt1.min;
  					var max=inpt1.max;
    
    /*init*/
    var sliderCoords = getCoords(slider);
    button1.style.marginLeft = '493px';
    button2.style.marginLeft = (slider.offsetWidth-button1.offsetWidth) + 'px';
    between.style.width = (slider.offsetWidth-button1.offsetWidth) + 'px';
    inpt1.value = min;
    inpt2.value = max;
    
    inpt1.onchange= function(evt)
    {
    	if (parseInt(inpt1.value) < min)
    		inpt1.value = min;
    	if (parseInt(inpt1.value) > max)
    		inpt1.value = max;
    	if (parseInt(inpt1.value) > parseInt(inpt2.value))
      {
      	var temp = inpt1.value;
    		inpt1.value = inpt2.value;
    		inpt2.value = temp;
      }
      
      
        var sliderCoords = getCoords(slider);
        var per1 = parseInt(inpt1.value-min)*100/(max-min);
        var per2 = parseInt(inpt2.value-min)*100/(max-min);
        var left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
        var left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;
        
            button1.style.marginLeft = left1 + 'px'; 
            button2.style.marginLeft = left2 + 'px';
            
            if (left1 > left2)
              {
                between.style.width = (left1-left2) + 'px';
                between.style.marginLeft = left2 + 'px';
              }
            else
              {
                between.style.width = (left2-left1) + 'px';
                between.style.marginLeft = left1 + 'px';  
              }
    }
    inpt2.onchange= function(evt)
    {
    	if (parseInt(inpt2.value) < min)
    		inpt2.value = min;
    	if (parseInt(inpt2.value) > max)
    		inpt2.value = max;
    	if (parseInt(inpt1.value) > parseInt(inpt2.value))
      {
      	var temp = inpt1.value;
    		inpt1.value = inpt2.value;
    		inpt2.value = temp;
      }
      
        var sliderCoords = getCoords(slider);
        var per1 = parseInt(inpt1.value-min)*100/(max-min);
        var per2 = parseInt(inpt2.value-min)*100/(max-min);
        var left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
        var left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;
        
            button1.style.marginLeft = left1 + 'px'; 
            button2.style.marginLeft = left2 + 'px';
            
            if (left1 > left2)
              {
                between.style.width = (left1-left2) + 'px';
                between.style.marginLeft = left2 + 'px';
              }
            else
              {
                between.style.width = (left2-left1) + 'px';
                between.style.marginLeft = left1 + 'px';  
              }
    }
  
    /*mouse*/
    button1.onmousedown = function(evt) {       
        var sliderCoords = getCoords(slider);
        var betweenCoords = getCoords(between); 
        var buttonCoords1 = getCoords(button1);
        var buttonCoords2 = getCoords(button2);
        var shiftX2 = evt.pageX - buttonCoords2.left; 
        var shiftX1 = evt.pageX - buttonCoords1.left;
      
        document.onmousemove = function(evt) {
            var left1 = evt.pageX - shiftX1 - sliderCoords.left;
            var right1 = slider.offsetWidth - button1.offsetWidth;
            if (left1 < 0) left1 = 0;
            if (left1 > right1) left1 = right1;
            button1.style.marginLeft = left1 + 'px';  
            
            
    				shiftX2 = evt.pageX - buttonCoords2.left; 
            var left2 = evt.pageX - shiftX2 - sliderCoords.left;
            var right2 = slider.offsetWidth - button2.offsetWidth;
            if (left2 < 0) left2 = 0;
            if (left2 > right2) left2 = right2;            
             
                var per_min = 0;
                var per_max = 0;
            if (left1 > left2)
              {
                between.style.width = (left1-left2) + 'px';
                between.style.marginLeft = left2 + 'px';
                 
                per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
                per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
              }
            else
              {
                between.style.width = (left2-left1) + 'px';
                between.style.marginLeft = left1 + 'px';                
                
                per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
                per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
              }
                inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
                inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
        
        };
        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
        };
        return false;
    };
    
  button2.onmousedown = function(evt) {       
        var sliderCoords = getCoords(slider);
        var betweenCoords = getCoords(between); 
        var buttonCoords1 = getCoords(button1);
        var buttonCoords2 = getCoords(button2);
        var shiftX2 = evt.pageX - buttonCoords2.left; 
        var shiftX1 = evt.pageX - buttonCoords1.left;
      
        document.onmousemove = function(evt) {
            var left2 = evt.pageX - shiftX2 - sliderCoords.left;
            var right2 = slider.offsetWidth - button2.offsetWidth;
            if (left2 < 0) left2 = 0;
            if (left2 > right2) left2 = right2;
            button2.style.marginLeft = left2 + 'px';                      
          
          
            shiftX1 = evt.pageX - buttonCoords1.left; 
            var left1 = evt.pageX - shiftX1 - sliderCoords.left;
            var right1 = slider.offsetWidth - button1.offsetWidth;  
            if (left1 < 0) left1 = 0;
            if (left1 > right1) left1 = right1;                      
             
                var per_min = 0;
                var per_max = 0;
                
            if (left1 > left2)
              {
                between.style.width = (left1-left2) + 'px';
                between.style.marginLeft = left2 + 'px';
                per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
                per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
              }
            else
              {
                between.style.width = (left2-left1) + 'px';
                between.style.marginLeft = left1 + 'px';
                per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
                per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
              }
                inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
                inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
            
        };
        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
        };
        return false;
    };
    
    button1.ondragstart = function() {
        return false;
    };
    button2.ondragstart = function() {
        return false;
    };

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }   
   
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active-span";
}
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

//





