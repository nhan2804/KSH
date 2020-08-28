$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    speed: 300,
    slidesToScroll: 3,
    autoplaySpeed :300,
    draggable: true,
    autoplay: true, /* this is the new line */
    autoplaySpeed: 2000,
    touchThreshold: 1000,
    dots: false,
    prevArrow: false,
    nextArrow: false
  });