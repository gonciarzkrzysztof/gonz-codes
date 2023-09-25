$(document).ready(function(){
  checkLang();
  circleTitle();
})

$(window).resize(function(){
  circleTitle();
})

// CIRCLE TITLE - ustawianie wielkości tytułu projektu

function circleTitle(){
  var $circle = $("section.project div.circle");
  var $h2 = $circle.children("h2.title");
  var $em = .01 * $(window).width();
  var ratio = 1;

  if($circle.parent().is("#loudnesswar")) {
    ratio = .8125;
  }

  if($circle.width() < 0.68 * $(window).width()){
    var fontSize = ratio * 0.15355805 * $(window).height()+"px";

    $h2.css({
      'font-size': fontSize
    })
  } else if($circle.width() > 0.72 * $(window).width()){
    $h2.css({
      'font-size': ratio * 64 + 'px'
    })
  } else {
    $h2.css({
      'font-size': '16em'
    })
  }
}

// CHECK-LANG

function checkLang(){
  var path = window.location.search;
  
  if(path === "?lang=pl"){
    setLang("pl");
  } else if(path === "?lang=en") {
    setLang("en");
  } else {
    setLang("pl");
  }
}

// SET-LANG

function setLang(lang){
  $("body").removeClass();
  $("body").addClass(lang);

  linkLang(lang);
}

// LINK-LANG

function linkLang(lang){
  lang = "?lang=" + lang;

  $("a.link").each(function(){
    var oldHref = $(this).attr("href");
    var index = oldHref.indexOf("?");

    if(index === -1){
      var newHref = oldHref + lang;
    } else {
      var newHref = oldHref.substr(0, index) + lang;
    }
    
    $(this).attr("href", newHref);
  })
}