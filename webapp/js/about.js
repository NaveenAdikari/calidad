//--------------about page name ----------------
   // Wrap every letter in a span
   var RetextWrapper = document.querySelector('.ml10 .Reletters');
   RetextWrapper.innerHTML = RetextWrapper.textContent.replace(/\S/g, "<span class='Reletters'>$&</span>");

   anime.timeline({loop: true})
   .add({
       targets: '.ml10 .Reletters',
       rotateY: [-90, 0],
       duration: 1600,
       delay: (el, i) => 45 * i
   }).add({
       targets: '.ml10',
       opacity: 0,
       duration: 1500,
       easing: "easeOutExpo",
       delay: 1000
   });