const PageVacancies = {
  init: function() {
    this.initAccordion()
  },

  initAccordion: function(){
    $(document).on('click', '.js-category-head', function(){
      const $category = $(this).closest('.js-category')
      $category.toggleClass('m-active', !$category.hasClass('m-active'))
    })
  }
}
