/* ========================================================================
 * Function to trigger accordion functions
 * this is accessable through global space
 * the function can be initiated using "global.accordion.init();"
 * ======================================================================== */

; (function (global, $) {

  var accordion = {

    $accordionItem: $('[data-accordion-item]'),
    $accordionHead: $('[data-accordion-head]'),
    $accordionContent: $('[data-accordion-content]'),

    init: ()=>{
      accordion.onHeadClick();
    },
    onHeadClick: ()=>{
      accordion.$accordionHead.on('click', function(){
        let $this = $(this);
        let $thisParent = $this.closest(accordion.$accordionItem);
        let $thisContent = $thisParent.find(accordion.$accordionContent);
        $thisContent.slideToggle();
      });
    }

  }

  global.accordion = {
    init: accordion.init
  }

})(global, jQuery);