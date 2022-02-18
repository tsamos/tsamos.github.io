window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
//===================================== DARK THEME =========================
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// PREVEIOSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

//We need to validate if the user has previously chosen a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  //ADD or remove the dark/light icon -- icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //We save the theme and the current icon that the user has chosen
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
console.log("THEME SETTING IS WORKING!");

//===================================== MENU SHOW Y HIDDEN =========================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ================  MENU SHOW  =============
/*  Validate if the constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ================  MENU HIDE  =============
/*  Validate if the constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

console.log("MENU Y SETTING WORKING!");
//===================================== REMOVE MENU PRORFILE =========================
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // when we click on nav__links, we remove the show menu
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
console.log("Remove menu profile is working!");


//===================================== ΟΙ ΧΩΡΟΙ ΜΑΣ  =========================







//===================================== Portfolio  =========================

$(window).on("load", function () {
  //show gallery after images finish loading

  $(".gallery").show();

  //assign a unique id to each image

  var uniqueId = 0;
  $(".gallery img").each(function () {
    $(this).attr("data-uniqueId", uniqueId);
    uniqueId++;
  });

  //Make the gallery layout

  function makeRows() {
    //User variables

    var margin = 10;
    var baseHeight = 200;
    var maxHeight = 250;

    //Declare variables

    var row = 0;
    var oldTop = 0;
    var heightDiff = 0;
    var winWidth = $(".gallery").width();
    var numberElementsRow = 0;
    var numberElementsPreLastRow = 0;
    var newWidth = 0;
    var widthImages = 0;
    var widthDiff = 0;
    var totalMargin = 0;
    var newHeight;
    var imageFormat;
    var preLastRow;
    var action;

    //Images initial situation

    $(".gallery img").height(baseHeight);
    $(".gallery img").width("auto");
    $(".gallery img").css("margin", "0");

    //Define a number for each row of initial situation

    $(".gallery img").each(function () {
      var thisTop = $(this).offset().top;
      heightDiff = thisTop - oldTop;
      if (heightDiff > 50) {
        row++;
      }
      $(this).attr("data-row", row);
      oldTop = thisTop;
    });

    //Calculating new widths to fill container

    for (i = 0; i <= row; i++) {
      numberElementsRow = $(".gallery img[data-row=" + i + "]").length;

      widthImages = 0;
      widthDiff = 0;
      $(".gallery img[data-row=" + i + "]").each(function () {
        widthImages = widthImages + $(this).width();
      });
      totalMargin = numberElementsRow * 2 * margin;
      widthDiff = widthImages / (winWidth - totalMargin);
      $(".gallery img[data-row=" + i + "]").each(function () {
        imageFormat = $(this).height() / $(this).width();
        newWidth = $(this).width() / widthDiff;
        newHeight = imageFormat * newWidth;
        if (i == row && newHeight > maxHeight) {
          newWidth = maxHeight / imageFormat;
        }
        $(this).width(newWidth);
        $(this).height("auto");
        $(".gallery img").css("margin", margin);
      });
    }
  }

  //calling function initial load

  makeRows();

  //calling function when window resizes

  $(window).resize(function () {
    makeRows();
  });

  //Gallery zoom on click
  //Load viewer

  $("body").append(
    '<div class="gallery_zoom_wrap"><div class="gallery_zoom"></div><div class="gallery_zoom_close">← πίσω</div><div class="gallery_zoom_button" id="gallery_back"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 77.6 77.6" style="enable-background:new 0 0 77.6 77.6;" xml:space="preserve"><path d="M74.1,35.3H11.2L37.1,5.8c1.3-1.5,1.1-3.7-0.3-4.9c-1.5-1.3-3.7-1.1-4.9,0.3l-31,35.3c-0.1,0.1-0.1,0.1-0.1,0.2 c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.3c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.1,0,0.2-0.1,0.2 C0,38.6,0,39,0.1,39.5c0,0.1,0,0.2,0.1,0.2c0,0.1,0.1,0.3,0.1,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0.1,0.1,0.2,0.2,0.3s0.1,0.2,0.2,0.2 c0,0.1,0.1,0.1,0.1,0.2l31,35.3c0.7,0.8,1.7,1.2,2.6,1.2c0.8,0,1.6-0.3,2.3-0.9c1.5-1.3,1.6-3.5,0.3-4.9L11.2,42.3h62.9 c1.9,0,3.5-1.6,3.5-3.5S76,35.3,74.1,35.3z"/></svg></div><div class="gallery_zoom_button" id="gallery_forward"><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 77.6 77.6" style="enable-background:new 0 0 77.6 77.6;" xml:space="preserve"> <path d="M0,38.8c0,1.9,1.6,3.5,3.5,3.5h62.9L40.5,71.8c-1.3,1.4-1.2,3.6,0.3,4.9c0.7,0.6,1.5,0.9,2.3,0.9c0.9,0,1.9-0.4,2.6-1.2 l31-35.3c0-0.1,0.1-0.1,0.1-0.2c0.1,0,0.1-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.3,0.1-0.4 c0.1,0,0.1-0.1,0.1-0.2c0.1-0.5,0.1-0.9,0-1.4c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0-0.3-0.1-0.4c0-0.1-0.1-0.2-0.1-0.3 c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.1-0.1-0.2-0.2c0-0.1,0-0.1-0.1-0.2l-31-35.3c-1.2-1.4-3.4-1.6-4.9-0.3c-1.4,1.2-1.6,3.4-0.3,4.9 l25.9,29.5H3.5C1.6,35.3,0,36.9,0,38.8z"/></svg></div></div>'
  );
  $(".gallery_zoom_wrap").hide();

  //Declare variables

  var src;
  var newSrc;

  //Setup on click event

  $(document).on("click", ".gallery img", function () {
    src = $(this).attr("src");
    uniqueId = $(this).attr("data-uniqueId");
    $(".gallery_zoom_wrap").fadeIn();
    $(".gallery_zoom").css("background", "url(" + src + ")");
    $(".gallery_zoom").css("background-size", "contain");
    $(".gallery_zoom").css("background-repeat", "no-repeat");
    $(".gallery_zoom").css("background-position", "center center");
  });

  //Close button

  $(document).on("click", ".gallery_zoom_close", function () {
    $(".gallery_zoom_wrap").fadeOut();
  });

  //Back and forward buttons

  function navigateZoom(action) {
    if (action == "back") {
      newUniqueId = $('.gallery img[data-uniqueId="' + uniqueId + '"]')
        .prev()
        .attr("data-uniqueId");

      if (newUniqueId == null) {
        newUniqueId = $(".gallery img:last-child").attr("data-uniqueId");
      }
    } else if (action == "forward") {
      newUniqueId = $('.gallery img[data-uniqueId="' + uniqueId + '"]')
        .next()
        .attr("data-uniqueId");
      if (newUniqueId == null) {
        newUniqueId = $(".gallery img:first-child").attr("data-uniqueId");
      }
    }
    newSrc = $('.gallery img[data-uniqueId="' + newUniqueId + '"]').attr("src");

    $(".gallery_zoom")
      .fadeOut(400, function () {
        $(".gallery_zoom").css("background", "url(" + newSrc + ")");
        $(".gallery_zoom").css("background-size", "contain");
        $(".gallery_zoom").css("background-repeat", "no-repeat");
        $(".gallery_zoom").css("background-position", "center center");
      })
      .fadeIn(400);

    uniqueId = newUniqueId;
  }

  $(document).on("click", ".gallery_zoom_button", function () {
    if ($(this).attr("id") == "gallery_back") {
      action = "back";
    } else if ($(this).attr("id") == "gallery_forward") {
      action = "forward";
    }
    navigateZoom(action);
  });

  $(document).keydown(function (e) {
    if (e.which == 37) {
      action = "back";
      navigateZoom(action);
      return false;
    } else if (e.which == 39) {
      action = "forward";
      navigateZoom(action);
      return false;
    }
  });
});

//----------------------------------testimonial--------------------------------------------------//

// vars
("use strict");
var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(
    document.getElementById("testim-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testim-content").children
  ),
  testimleftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer;
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }
    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }
    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }
    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }
  testimleftArrow.addEventListener("click", function () {
    playSlide((currentSlide -= 1));
  });
  testimRightArrow.addEventListener("click", function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }
  playSlide(currentSlide);
};

//===================================== social media =========================



//===================================== SCROLL UP =========================
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  // When the scroll higher than 560 viewpoint /height , then the scroll up icon showld appear and on clicking should reach top of the page
  if (this.scrollY >= 560) {
    scrollup.classList.add("show-scroll");
  } else {
    scrollup.classList.remove("show-scroll");
  }
  console.log("Scroll up being called and working!");
}
window.addEventListener("scroll", scrollUp);

//===================================== SCROLL SECTION ACTIVE HIGHLIGHT =========================

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });

  console.log("Section highlight working!");
}
window.addEventListener("scroll", scrollActive);
