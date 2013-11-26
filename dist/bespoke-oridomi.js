/*!
 * bespoke-oridomi v0.0.0
 * https://github.com/ebow/bespoke-oridomi
 *
 * Copyright 2013, Tim Churchward
 * This content is released under the MIT license
 */

(function(bespoke) {

  bespoke.plugins.oridomi = function(deck, options) {
    var oridomi_options = {
      speed:           1200,  // folding duration in ms
      ripple:          2,     // backwards ripple effect when animating
      shadingIntesity: 0.5,    // lessen the shading effect
      perspective:     800,   // smaller values exaggerate 3D distortion
      maxAngle:        40,    // keep the user's folds within a range of -40 to 40 degrees
      shading:         'soft' // change the shading type
    };
    
    // override default values with incoming options
    if(options.hasOwnProperty('oridomi_options')) {
      for(var option in options.oridomi_options) {
        oridomi_options[option] = options.oridomi_options[option];
      }
    }
    
		var oridomi_slides = deck.slides.map(function(slide) {
			return new OriDomi(slide, oridomi_options);
		}, oridomi_options);
    
    deck.on('activate', function(e) {
      console.log('Slide #' + e.index + ' was activated!', e.slide);
      // var current_slide_folder = oridomi_slides[e.index];
      // current_slide_folder.unfold();
    });

    deck.on('deactivate', function(e) {
      console.log('Slide #' + e.index + ' was deactivated!', e.slide);
    });

    deck.on('next', function(e) {
      console.log('The next slide is #' + (e.index + 1), deck.slides[e.index + 1]);
      console.log('folded: '+ e.folded);
      if(!e.folded) {
        var current_slide_folder = oridomi_slides[e.index];
        current_slide_folder.foldUp(function(){deck.next({folded: true});});
        return false;
      }
    });

    deck.on('prev', function(e) {
      console.log('The previous slide is #' + (e.index - 1), deck.slides[e.index - 1]);
      // return false to cancel user interaction
    });

    deck.on('slide', function(e) {
      console.log('The requested slide is #' + e.index, e.slide);
      // return false to cancel user interaction
    });
  };

}(bespoke));
