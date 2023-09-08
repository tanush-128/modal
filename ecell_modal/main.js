document.getElementById("button").addEventListener("click", function() {
  var modal = document.getElementById("modal");
//   alert("You clicked the button!");  
  modal.style.display = "flex";
});

document.getElementById("close").addEventListener("click", function() {
    var modal = document.getElementById("modal");
 ;  
    modal.style.display = "none";
  });