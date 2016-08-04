    var linkmap = document.querySelector (".js-map");
    var linkbuy = document.querySelectorAll (".js-buy");     
    var map = document.querySelector (".modal-map");
    var buy = document.querySelector (".modal-add-product"); 
    var closemap = document.querySelector (".modal-content-close-map");
    var closebuy = document.querySelector (".modal-content-close-buy");
    var linklesson = document.querySelector (".js-lesson");
    var closelesson = document.querySelector (".modal-content-close-lesson");
    var storage = localStorage.getItem ("login");  
    var lesson = document.querySelector (".modal-write-us");

    if (linklesson && lesson && closelesson) {
      var form = lesson.querySelector ("form");
      var login = lesson.querySelector ("[name=login]");
      var email = lesson.querySelector ("[name=email]");
      var textletter = lesson.querySelector ("[name=textletter]");

      linklesson.addEventListener ("click", function(event) {
      event.preventDefault();
      lesson.classList.add ("modal-content-show");
      login.focus();
        if (storage) {
           login.value = storage;
            email.focus();
        } else {
          login.focus();
          }
      });

      closelesson.addEventListener ("click", function(event) {
        event.preventDefault();
        lesson.classList.remove ("modal-content-show");
        lesson.classList.remove ("modal-error");
      });

      form.addEventListener ("submit", function(event) {
        if(!login.value || !email.value || !textletter.value) {
          event.preventDefault();
          lesson.classList.add ("modal-error");
        } else {
          localStorage.setItem ("login", login.value);
          localStorage.setItem ("email", email.value); 
          }
      });

      window.addEventListener ("keydown", function(event) {
        if (event.keyCode === 27) {
          if (lesson.classList.contains ("modal-content-show")) {
            lesson.classList.remove ("modal-content-show");
            lesson.classList.remove ("modal-error");
          }
        }
      }); 
    } 

    for (var i = 0; i < linkbuy.length; i++) {
      linkbuy[i].addEventListener("click", function(event) {
        event.preventDefault();
        buy.classList.add("modal-content-show");
        });
    };

    closebuy.addEventListener ("click", function(event) {
      event.preventDefault();
      buy.classList.remove ("modal-content-show")
    });

    window.addEventListener ("keydown", function(event) {
      if (event.keyCode === 27) {
        if (buy.classList.contains ("modal-content-show")) {
          buy.classList.remove ("modal-content-show");
        }
      }
    });

    linkmap.addEventListener ("click", function (event) {
      event.preventDefault();
      map.classList.add ("modal-content-show-map");
    });   

    closemap.addEventListener ("click", function(event) {
      event.preventDefault();
      map.classList.remove ("modal-content-show-map")
    });

    window.addEventListener ("keydown", function(event) {
      if (event.keyCode === 27) {
        if (map.classList.contains ("modal-content-show-map")) {
          map.classList.remove ("modal-content-show-map");
        }
      }
    });