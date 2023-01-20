$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


function zoom() {
    var reed = document.getElementById("slogan");
    reed.classList.add("animation");
  }