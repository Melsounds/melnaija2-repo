document.addEventListener("DOMContentLoaded", function() {
    const lazyloadImageSet = document.querySelectorAll("img.lazy");    
    let lazyloadThrottleTimeout;
    
    function lazyloadImages () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          const scrollTop = window.pageYOffset;
          lazyloadImageSet.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImageSet.length == 0) { 
            document.removeEventListener("scroll", lazyloadImages);
            window.removeEventListener("resize", lazyloadImages);
            window.removeEventListener("orientationChange", lazyloadImages);
          }
      }, 50);
    }
    
    document.addEventListener("scroll", lazyloadImages);
    window.addEventListener("resize", lazyloadImages);
    window.addEventListener("orientationChange", lazyloadImages);
  });
  
