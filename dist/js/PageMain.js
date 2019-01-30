const PageMain = {
  init: function() {
    this.animateNumbers()
    this.initBlockMain2()
  },

  animateNumbers: function() {
    $('.js-animate-value').each(function(){
      const $el = $(this)
      const value = $el.text()
      $el.text('0')
      $el.addClass('m-show').animateNumber({ number: value, easing: 'easeInQuad' }, 1500)
    })
  },

  initBlockMain2: function() {
    const $block = $('.js-main2')
    const $image = $block.find('.js-main2-img')
    const $text = $block.find('.js-main2-text')
    const $items = $block.find('.js-item')
    const $firstItem = $items.eq(0)
    const select = function($item) {
      $items.removeClass('m-active')
      $item.addClass('m-active')
      const itemImg = $item.find('.js-img').text()
      const itemText = $item.find('.js-text').html()
      $image.attr('src', itemImg)
      $text.html(itemText)
    }

    select($firstItem)
    $block.on('click', '.js-item', function(){ select($(this)) })
  }
}
