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
        const $form = $('.js-search-form')
        $('.js-search-button').on('click', function(){
            if ($form.hasClass('m-show')) {
                $form.removeClass('m-show')
            } else {
                $form.addClass('m-show')
                $form.find('input').focus()
            }
        })
    },
}
