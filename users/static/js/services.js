jQuery(document).ready(function($){
  
    function cleartext() {
  
    document.getElementById('webdevelopment').style.display = "none";
    document.getElementById('uidesign').style.display = "none";
    document.getElementById('pre-press').style.display = "none";
    document.getElementById('packagingdesign').style.display = "none";
    document.getElementById('printing').style.display = "none";
    document.getElementById('graphicdesign').style.display = "none";
    }
    
  $(document).on('click', '.service', function(e) {
      var that = $(this);
      var x = that.attr('id');
      var rel = that.data('rel');
      var ajaxurl = that.data('url');
  if ((document.querySelector('.row1expand') !== null) && $(this).hasClass("selectedservice"))  
    
    /* Collapse if expanded and same click */
  {
       $("#servicechoicetext").animate({left: '390px', opacity: '0.4'}, "200", servicechoiceblank); 
       function servicechoiceblank(){document.getElementById('servicechoicetext').innerHTML = "View Services";}
        $(".row1").toggleClass('row1expand');
        $(".row2").toggleClass('row2expand');
        $(".service").toggleClass('serviceexpand');
        $(this).toggleClass('selectedservice');
      $('#servicesdetailschild').removeClass('visible');
    
       setTimeout(function(){
           cleartext();
  }, 1000);
  }
    
    /* Expanded - change selection */
    else if (document.querySelector('.row1expand') !== null) 
  {
    $(".selectedservice").removeClass('selectedservice');
    $(this).toggleClass('selectedservice');
    
    var servicechoicetextvar = $(this).find("p").text();
     
    $('#servicesdetailschild').removeClass('visible');
    
  function bodytext() {
      cleartext()
       if (servicechoicetextvar.trim() === "WEB DEVELOPMENT") {
      document.getElementById('webdevelopment').style.display = "block";
    }
      if (servicechoicetextvar.trim() === "UI DESIGN") {
      document.getElementById('uidesign').style.display = "block";
    }
        if (servicechoicetextvar.trim() === "PRE-PRESS") {
      document.getElementById('pre-press').style.display = "block";
    }
        if (servicechoicetextvar.trim() === "PACKAGING DESIGN") {
      document.getElementById('packagingdesign').style.display = "block";
    }
        if (servicechoicetextvar.trim() === "PRINTING") {
      document.getElementById('printing').style.display = "block";
    }
        if (servicechoicetextvar.trim() === "GRAPHIC DESIGN") {
      document.getElementById('graphicdesign').style.display = "block";
    }}
         setTimeout(function(){
           bodytext();
  }, 400);
    
    if (document.getElementById('servicechoicetext').innerHTML !== servicechoicetextvar)
      {
       /*execute sliding text*/
        function servicechoicechange() {
       document.getElementById('servicechoicetext').innerHTML = servicechoicetextvar;
   $('#servicesdetailschild').addClass('visible');
        }
             
          $("#servicechoicetext").animate({left: '350px', opacity: '0.9'}, "400", servicechoicechange); 
                $("#servicechoicetext").animate({left: '70px', opacity: '0.9'}, "700"); 
      }
  }

  else {
        $(".row1").toggleClass('row1expand');
          $(".row2").toggleClass('row2expand');
          $(".service").toggleClass('serviceexpand');
        $(this).toggleClass('selectedservice');
      var servicechoicetextvar = $(this).find("p").text();
    document.getElementById('servicechoicetext').innerHTML = servicechoicetextvar;
    $("#servicechoicetext").animate({left: '70px', opacity: '0.9'}, "700");
    
    function bodytext() {
       if (servicechoicetextvar.trim() === "WEB DEVELOPMENT") {
      document.getElementById('webdevelopment').style.display = "block";
    }
      if (servicechoicetextvar.trim() === "UI DESIGN") {
      document.getElementById('uidesign').style.display = "block";
    }
        if (servicechoicetextvar.trim() === "PRE-PRESS") {
      document.getElementById('pre-press').style.display = "block";
    }
        if (servicechoicetextvar.trim() === "PACKAGING DESIGN") {
      document.getElementById('packagingdesign').style.display = "block";
    }
        if (servicechoicetextvar.trim() === "PRINTING") {
      document.getElementById('printing').style.display = "block";
    }
        if (servicechoicetextvar.trim() === "GRAPHIC DESIGN") {
      document.getElementById('graphicdesign').style.display = "block";
    }}
    
       setTimeout(function(){
         bodytext();
  }, 1000);
    
     setTimeout(function(){
         $('#servicesdetailschild').addClass('visible');
  }, 1100);
         }
  });
  });
   
  

  $(document).ready(function () {
      "use strict";
      var heading = $('#our-services .desc .heading h1'),
          txt = $('#our-services .desc .text'),
          serviceItem = $('#our-services .services .column .service'),
          tl = new TimelineLite();
  
      tl
          .from(heading, 0.3, {opacity : 0, y : -20}, '+=0.3')
          .from(txt, 0.3, {opacity : 0, y : -20})
          .staggerFrom(serviceItem, 0.2, {opacity : 0, x : -50, autoAlpha : 0}, 0.1);
  });
    
  