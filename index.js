
for ( var i=0; i<document.querySelectorAll(".drum-parts").length ;i++){
    document.querySelectorAll(".drum-parts")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
    
        makeSound(buttonInnerHTML);
    
        buttonAnimation(buttonInnerHTML);
    
      });
    
    }
    
    document.addEventListener("keypress", function(event) {
    
      makeSound(event.key);
    
      buttonAnimation(event.key);
    
    });
    
    
    function makeSound(key) {
    
      switch (key) {
        case "q":
          var crash1 = new Audio("resources\\audio\\tr707-crash-cymbal.mp3");
          crash1.play();
          break;
    
        case "w":
          var d1 = new Audio("resources\\audio\\tr707-snare-drum.mp3");
          d1.play();
          break;
    
        case "e":
          var dc1 = new Audio("resources\\audio\\tr707-snare-drum.mp3");
          dc1.play();
          break;
    
        case "s":
          var dc2 = new Audio("resources\\audio\\whoosh-drum-hits.mp3");
          dc2.play();
          break;
    
        case "d":
          var d2 = new Audio("resources\\audio\\whoosh-drum-hits.mp3");
          d2.play();
          break;
    
        case "r":
          var crash2 = new Audio('resources\\audio\\tr909-crash-cymbal.mp3');
          crash2.play();
          break;
    
        case "space":
          var kick = new Audio('resources\\audio\\tr909-kick-drum.mp3');
          kick.play();
          break;
    
    
        default: console.log(key);
    
      }
    }
    
    
    function buttonAnimation(currentKey) {
    
      var activeButton = document.querySelector("." + currentKey);
    
      activeButton.classList.add("pressed");
    
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
    
    }