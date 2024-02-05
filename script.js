$(document).ready(function () {
    $(window).scroll(function () {
      
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
     
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    
    $(".scroll-up-btn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow"); 
    });
  
    
    $(".navbar .menu li a").click(function () {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
      }, "slow");
    });
  
    
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    
    var typed = new Typed(".typing", {
      strings: [
        "Cutting-edge digital solutions",
        "Tailored online presence boosters",
        "Unparalleled success drivers",
        "Technology-driven progress",
        "Your digital growth partner"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Digital Transformation",
        "Cutting-Edge Solutions",
        "Online Presence",
        "Technology Partnership",
        "Digital Growth"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    // Pure JavaScript accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        accordionItem.classList.toggle('active');
      });
    });

    // Owl Carousel
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
});