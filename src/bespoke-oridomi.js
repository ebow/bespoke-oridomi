(function(bespoke) {

  bespoke.plugins.oridomi = function(deck, options) {
    var slide_count = 0;
    var oridomi_slides = [];
    var transition = "foldUp";
    var valid_effects = ["foldUp", "accordion"];
    var oridomi_options = {
      speed:           700,   // folding duration in ms
      ripple:          0,     // backwards ripple effect when animating
      shadingIntesity: 10,    // lessen the shading effect
      perspective:     1000,  // smaller values exaggerate 3D distortion
      maxAngle:        90,    // keep the user's folds within a range of -40 to 40 degrees
      shading:         'hard',// change the shading type,
      touchEnabled:    false
    };
    
    if(options.hasOwnProperty('transition') && valid_effects.indexOf(options.transition) >= 0) {
      transition = options.transition;
    }
    
    // override default values with incoming options
    if(options.hasOwnProperty('oridomi_options')) {
      for(var option in options.oridomi_options) {
        oridomi_options[option] = options.oridomi_options[option];
      }
    }
		oridomi_slides = deck.slides.map(function(slide) {
      var cloned_slide = slide.cloneNode(true);
      var oridomi_container = document.createElement('div');
      var oridomi;
      oridomi_container.classList.add('oridomi_container');
      oridomi_container.appendChild(cloned_slide);
      slide.innerHTML = "";
      slide.appendChild(oridomi_container);
      
      oridomi = new OriDomi(oridomi_container, oridomi_options);
      if(slide_count > 0) {
        oridomi.setSpeed(0);
        if(transition === "foldUp") {
          oridomi.foldUp(2);
        } else if (transition === "accordion") {
          oridomi.accordion(100, 2);
        }
        oridomi.setSpeed(oridomi_options.speed);
      }
      slide_count++;
      return oridomi;
		}, oridomi_options);

    deck.on('activate', function(event) {
      var current_slide_folder = oridomi_slides[event.index];
      
      if(transition === "foldUp") {
        current_slide_folder.reset();
      } else if (transition === "accordion") {
        setTimeout(function() { current_slide_folder.reset(); }, 300); // delay to avoid overlap
      }
    });

    deck.on('next', function(event) {
      if(event.index < deck.slides.length-1) {
        var current_slide_folder = oridomi_slides[event.index];
        if(transition === "foldUp") {
          current_slide_folder.foldUp(4);
        } else if (transition === "accordion") {
          current_slide_folder.accordion(100, 4);
        }
      }
    });

    deck.on('prev', function(event) {
      if(event.index !== 0) {
        var current_slide_folder = oridomi_slides[event.index];
        if(transition === "foldUp") {
          current_slide_folder.foldUp(2);
        } else if (transition === "accordion") {
          current_slide_folder.accordion(100, 2);
        }
      }
    });
  };
}(bespoke));
