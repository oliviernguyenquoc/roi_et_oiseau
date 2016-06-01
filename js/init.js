jQuery( document ).ready(function( $ ) {

    $('.button-collapse').sideNav();
    $('#roi').hide().fadeIn(5000);
    $('#oiseau').hide().delay(500).fadeIn(5000);
    $('#roi-link').hide().fadeIn(5000);
    $('#oiseau-link').hide().delay(500).fadeIn(5000);
    $(document).delay(5000).queue(function () {
    	$(document).avgrund({
            height: 270,
            holderClass: 'custom',
            onBlurContainer: '.container',
            showClose: true,
            showCloseText: 'close',
            openOnEvent: false,
            template: '<h4 class="center-align">Achète ta place !</h4> <div class="row"> <div class="col s3"><img class="responsive-img" src="images/billet.png"></div> <div class="col s1"></div> <div class="col s8">Prends ta place pour le 1er ou 6 JUIN à l\'ESSEC ou le 8 JUIN à Paris<br/><br/> <div class="row"><a href="https://www.billetweb.fr/le-monarque-et-le-volatil" target="_blank" class="essec link-place">A l\'ESSEC</a> <a href="https://www.billetweb.fr/les-pieces-montees" target="_blank" class="paris link-place">A Paris</a></div> <b>Bon spectacle !</b> </div> </div>' 
        })});

  }); // end of document ready



  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-65636357-2', 'auto');
  ga('send', 'pageview');
