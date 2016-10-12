(function() {
   "use strict";
   function fn(){
      if (document.images) {
         var image = new Image()
             image.src = "img/bg.png"
      }
      var buttons = document.getElementsByTagName('button');
      for(var button of buttons) {
         button.addEventListener("click", function () {
            document.body.className+="fuck";
            buttons[0].innerText ="#WTF";
            buttons[2].innerText ="NO";
            document.getElementById("sure").innerText ="ARE YOU SURE THAT YOU'RE SURE ?";
         });
      }
   }

   var oldonload = window.onload;
   if (typeof window.onload != 'function') {
      window.onload = fn;
   } else {
      window.onload = function() {
         if (oldonload) {
            oldonload();
         }
         fn();
      }
   }   
})();
