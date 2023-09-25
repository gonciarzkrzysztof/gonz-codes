$(document).ready(function(){
  checkLang();
  hideLinks();
  framesFit();
  buildLine();
})

$(window).resize(function(){
  buildLine();
  circleTitle();
  framesFit();
})

$(window).scroll(function(){
  pop();
})

// FRAMES-FIT

function framesFit(){
//   var $octo = $('img[src^="img/octo"]');
  var $frames = $('img.frames');

  $frames.each(function(){
    $(this).height($(this).parent("div").height());
  })
}

// POP 

function pop(){
  $("section.project div.circle:not(.unclickable)").each(function(){
    var $offset = $(this).offset().top;
    var $scroll = $(window).scrollTop();

    if($offset > $scroll - 40 && $offset < $scroll + $(window).height()){
      $(this).addClass("pop");
    }
    else {
      $(this).removeClass("pop");
    }
  })
}

// REDIRECT

$("section.project > div.circle a.subtitle").click(function(e){
  e.preventDefault();

  var $a = $(this);
  var $parent = $a.parent().parent("section.project");
  var $rect = $parent.children("div.rectangle");
  var $divs = $parent.children("div.project-bg, div.circle");

  
  var h1Height = 90;

  if($(window).width() <= 650) {
    h1Height = 60;
  }


  $divs.css({
    'position': 'fixed',
    'transform': 'translateY(-' + (.5 * ($(window).height() - $rect.height()) - h1Height) + 'px)',
    'background-color': 'transparent'
  });

  $rect.css({
    'position': 'fixed',
    'transform': 'translateY(-' + (.5 * ($(window).height() - $rect.height()) - h1Height) + 'px)',
    'opacity': 1
  })

  $("section.project > div.circle.unclickable > *:not(.banner, .title, ul.icons)").css({
    'opacity': 0
  })

  $("section.project > div.circle.unclickable > ul.icons").css({
    'transform': 'translateY(-160%)'
  })

  $("body > header").addClass("small");

  $("body > header h1").css({
    'transform-origin': 'center -' + ($("body > header h1").css('top')), 
    'transform': 'scale(' + (h1Height / $("body > header h1").height() ) + ')'
  })

  $("div#big-white-bg").css({
    'opacity': 1,
    'transform': 'translateY(100vh)'
  })

  $("body, html").animate({
    scrollTop: 0
  }, 300, function(){
//     history.pushState('null', 'null', $(this).attr('href'));
    window.location.href = $a.attr('href');
  });
})

// HIDE LINKS - ukrywa <a> z projektow

function hideLinks() {
  $("section.project > a").css({
    'z-index': 0
  })
}

// LANG-ON - przełącza języki

$("ul.lang li").click(function(){
  var lang = $(this).attr("id");
  setLang(lang);
})

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

// PROJECT CLICK - kliknięcie na projekty

$("section.project > div").click(function(){
  var $project = $(this).parent();
  var $others = $("section.project");
  var $circle = $project.children("div.circle");

  if(!$project.hasClass("large")){
    $circle.removeClass("pop");
    $circle.addClass("unclickable");
    $("body, html").animate({
      scrollTop: $project.offset().top + 0.5 * $project.height() - 0.5 * $(window).height()
    }, 150, function(){
      $others.removeClass("large");
      $project.addClass("large");
      
      circleTitle();
      
//       $("body").css({
//         overflow: 'hidden'
//       })
    });
  } else {
    if(!$(this).hasClass("unclickable")){
      $project.removeClass("large");
      $circle.removeClass("unclickable");
      window.setTimeout(function(){
        $circle.addClass("pop");
      },1000);

//       $("body").css({
//         overflow: 'initial'
//       }) 
    }
  }
})

// BUILDLINE - tworzy krzywą osi czasu

function buildLine(){
  var center = $(window).width()/2;
  var points = "M"+center+",80 ";

  var x = [];
  var y = [];

  var rectFin = $("article.rectangle").offset().top + $("article.rectangle").outerHeight() - $("section#timeline").offset().top;
  x.push(center);
  y.push(rectFin);

  points += center + "," + rectFin + " ";

  $("section#projects").children(".octo-parent").each(function(){
    var xPos = $(this).offset().left + 0.5 * $(this).width();
    var yPos = $(this).offset().top + 0.5 * $(this).height() - $("section#timeline").offset().top;
    x.push(xPos);
    y.push(yPos);
  })

  var circStart = $("article.circle").offset().top - $("section#timeline").offset().top + 5;
  x.push(center);
  y.push(circStart);

  var offset = 30;

  for (i = 0; i < 7; i++){
    points += "C" + x[i] + "," + (y[i+1] - offset) + " " + x[i+1] + "," + (y[i] + offset) + " " + x[i+1] + "," + y[i+1] + " ";
  }

  $("path#line").attr("d", points);
}

// CIRCLE TITLE - ustawianie wielkości tytułu projektu

function circleTitle(){
  var $circle = $("section.project div.circle.unclickable");
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