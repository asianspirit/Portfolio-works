$(function () {


    let cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: (window.innerWidth / 2),
        endY: (window.innerHeight / 2),
        cursorVisible: true,
        cursorEnlarged: false,
        $dot: document.querySelector('.cursor-dot'),
        $outline: document.querySelector('.cursor-dot-outline'),
        
        init: function() {
            // Set up element sizes
            this.dotSize = this.$dot.offsetWidth;
            this.outlineSize = this.$outline.offsetWidth;
            
            this.setupEventListeners();
            this.animateDotOutline();
        },
     
        setupEventListeners: function() {
            let self = this;
            
            // Anchor hovering
            document.querySelectorAll('a').forEach(function(el) {
                el.addEventListener('mouseover', function() {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                el.addEventListener('mouseout', function() {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });
            });
            
            // Click events
            document.addEventListener('mousedown', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            document.addEventListener('mouseup', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
      
      
            document.addEventListener('mousemove', function(e) {
                // Show the cursor
                self.cursorVisible = true;
                self.toggleCursorVisibility();
    
                // Position the dot
                self.endX = e.pageX;
                self.endY = e.pageY;
                self.$dot.style.top = self.endY + 'px';
                self.$dot.style.left = self.endX + 'px';
            });
            
            // Hide/show cursor
            document.addEventListener('mouseenter', function(e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            });
            
            document.addEventListener('mouseleave', function(e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            });
        },
        
        animateDotOutline: function() {
            let self = this;
            
            self._x += (self.endX - self._x) / self.delay;
            self._y += (self.endY - self._y) / self.delay;
            self.$outline.style.top = self._y + 'px';
            self.$outline.style.left = self._x + 'px';
            
            requestAnimationFrame(this.animateDotOutline.bind(self));
        },
        
        toggleCursorSize: function() {
            let self = this;
            
            if (self.cursorEnlarged) {
                self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
                self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            } else {
                self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
                self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        },
        
        toggleCursorVisibility: function() {
            let self = this;
            
            if (self.cursorVisible) {
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            } else {
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            }
        }
    }
    cursor.init();

    $('.burger').on('click', function () {
        $('.burger').toggleClass('open');
        $('.burger-menu').toggleClass('open');
        $('.home').toggleClass('open');
        $('.works').toggleClass('open');
        $('.about').toggleClass('open');
       
    });

    $('#form .input').blur(function(){
        if($(this).val().length > 0){
          $(this).addClass('white');
        } else {
          $(this).removeClass('white');
        }
      });

      let swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 40,
      //   init: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          440: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1365: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }
      });
 
      const swup = new Swup();

      $(document).ready(function() {
        $('.page').mousemove(function(e) {
          parallax(e, document.getElementById('content'), 1);
        });
      });
      
      function parallax(e, target, layer) {
        let strength = 30;
        let layer_coeff = strength / layer;
        let x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
        let y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
        $(target).offset({
          top: y,
          left: x
        });
      };

      swup.on('contentReplaced', function() {
        swup.options.containers.forEach((selector) => {
          $(document).ready(function() {
            $('.page').mousemove(function(e) {
              parallax(e, document.getElementById('content'), 1);
            });
          });
          
          function parallax(e, target, layer) {
            let strength = 30;
            let layer_coeff = strength / layer;
            let x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
            let y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
            $(target).offset({
              top: y,
              left: x
            });
          };
    
        });
      });

swup.on('contentReplaced', function() {
    swup.options.containers.forEach((selector) => {
        let swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
          //   init: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
              440: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }
          });

    });
  });


      
});




