const Main = {
  init: function() {
    this.animateNumbers()
  },

  animateNumbers: function() {
    $('.js-animate-value').each(function(){
      const $el = $(this)
      const value = $el.text()
      $el.text('0')
      $el.addClass('m-show').animateNumber({ number: value, easing: 'easeInQuad' }, 1500)
    })
  },
}
