const App = {
  init: function() {
    this.initMobileMenu()
    this.initSearch()
  },

  initMobileMenu: function() {
    const $menu = $('.js-menu')
    const $close = $('.js-menu-close')
    const $shader = $('.js-menu-shader')
    const $burger = $('.js-burger')
    $burger.on('click', function(){
      $shader.addClass('m-show')
      $menu.addClass('m-show')
    })
    const close = function() {
      $shader.removeClass('m-show')
      $menu.removeClass('m-show')
    }
    $shader.on('click', close)
    $close.on('click', close)
  },

  initSearch: function() {
    const $button = $('.js-search')
    const $block = $('.js-search-block')
    $button.on('click', function(){
      if ($block.hasClass('m-show')) {
        $block.removeClass('m-show')
      } else {
        $block.addClass('m-show')
        $block.find('input').focus().val('')
      }
    })
  },
}
