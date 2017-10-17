$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.materialboxed').materialbox();
  $('ul.tabs').tabs();

  $(".galeria img").click(function(e){
    let url = $(this).attr("src");
        $(".img-galeria-principal").fadeOut(300, function () {
            $(".img-galeria-principal").attr("src", url);
            $(".img-galeria-principal").fadeIn(500);
        });
  });

});
