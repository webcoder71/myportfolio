$(function () {

  // Counter up js start
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  //counter up js end

  // type js start
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  }

  // Type js part end

  // menue fix function start
  var windo = $(window);
  var page = $('html, body');
  windo.on('scroll', function () {
    if (windo.scrollTop() > 90) {
      $('#main_menu').addClass('animated slideInDown fix')
    } else {
      $('#main_menu').removeClass('animated slideInDown fix')
    }


  });
  // manue fix js end
  // skick carousel js start 
  // for clients par
  $('.clients').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,


  });
// for testimonial 
  $('.testimonials').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,


  });

  // slick carousel js end

  /* Filters js */
  const simpleFilters = document.querySelectorAll('.simplefilter li');
  Array.from(simpleFilters).forEach((node) =>
    node.addEventListener('click', function () {
      simpleFilters.forEach((filter) => filter.classList.remove('active'));
      node.classList.add('active');
    })
  );
  // Expose this filterizr as a global for debugging
  window.filterizr = new window.Filterizr('.filtr-container', {
    controlsSelector: '.fltr-controls',
  });


  /* Filters js */


})