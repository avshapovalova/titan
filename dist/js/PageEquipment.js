const PageEquipment = {

  init: function() {
    this.initGallery()
  },

  initGallery: function() {
    $('.js-gallery').slick({
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.js-thumbs'
    })
    $('.js-thumbs').slick({
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.js-gallery',
      centerMode: false,
      focusOnSelect: true,
      prevArrow: '.js-thumbs-prev',
      nextArrow: '.js-thumbs-next',
    })
  }
}
