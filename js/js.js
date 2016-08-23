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



