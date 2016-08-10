    var linkforma = document.querySelector (".js-forma");
    var form = document.querySelector (".form-horizontal");

    linkforma.addEventListener ("click", function (event) {
      event.preventDefault();
      form.classList.add ("show-map");
  });


    window.addEventListener ("keydown", function(event) {
      if (event.keyCode === 27) {
        if (form.classList.contains ("show-map")) {
          form.classList.remove ("show-map");
      }
  }
});

    jQuery(document).ready(function($) {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var val = +$input[0].defaultValue;
            var count = parseInt($input.val()) - val;
            count = count < val ? val : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            var val = +$input[0].defaultValue;
            $input.val(parseInt($input.val()) + val);
            $input.change();
            return false;
        });
    });

