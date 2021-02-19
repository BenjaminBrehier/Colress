$(document).ready(function(){
  (function(){
      var i = 0;
      setInterval(function(){
          $("#by").removeClass("bg1, bg2, bg3").addClass("bg"+(i++%3 + 1));
      }, 5000);
  })();
});


$(document).ready(function() {
  $("#ifloatAnglais").hide();
  $("#FR").hide();
  $("#nav_cmd_Anglais").hide();
	$('#Anglais').on('click', function() { // Au clic sur un élément
    $("#Anglais").hide();
    $("#ifloatFR").hide();
    $("#nav_cmd").hide();
    $("#ifloatAnglais").toggle();
    $("#FR").toggle();
    $("#nav_cmd_Anglais").toggle();
  });
  
  $('#FR').on('click', function() { // Au clic sur un élément
    $("#FR").hide();
    $("#ifloatAnglais").hide();
    $("#nav_cmd_Anglais").hide();
    $("#ifloatFR").toggle();
    $("#Anglais").toggle();
    $("#nav_cmd").toggle();
  });
});

