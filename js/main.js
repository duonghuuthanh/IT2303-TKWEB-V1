window.onload = function() {
  

    // add element
    let els = document.querySelectorAll(".forum");
    for (let e of els)
        e.classList.add("wow");

    let evenEles = document.querySelectorAll(".forum:nth-child(even)");
    for (let e of evenEles)
        e.classList.add("animate__backInLeft");

    let oddEles = document.querySelectorAll(".forum:nth-child(odd)");
    for (let e of oddEles)
        e.classList.add("animate__backInRight");

    // init wow
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
}