$(document).ready(function(){
  const object = $("#mover");
  let l = window.innerWidth * 0.45;
  let t = window.innerHeight * 0.45;
  $(document).keydown(function(e){
    switch (e.keyCode) {
      case 37:
          console.log('Left Key pressed!');
          if (l > 10){
            l -= 10
            console.log(l)
            object.css("left", l + "px");
          } else {
            alert("Reached the Left-End")
          }
          break;
      case 38:
          console.log('Up Key pressed!');
          
          if (t > 10){
            t -= 10
            console.log(t)
            object.css("top" ,t + "px");
          } else {
            alert("Reached the Top-End")
          }
          break;
      case 39:
          console.log('Right Key pressed!');
          if (l < window.innerWidth - 110){
            l += 10
            console.log(l)
            object.css("left", l + "px");
          } else {
            alert("Reached the Right-End")
          }
          break;
      case 40:
          console.log('Down Key pressed!');
          if (t < window.innerHeight - 110){
            t += 10
            console.log(t)
            object.css("top", t + "px");
          } else {
            alert("Reached the Bottom-End")
          }
          break;
      default:
      	  alert("Try arrow keys");
  }
  });
});
