$( document ).ready(function(){
	$(".button-collapse").sideNav();
  $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 300 // Transition out duration// Ending top style attribute
    }
  );
})