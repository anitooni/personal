var nav           = $('nav');
var menu          = $('.menu');
var menuContainer = $('.menu-container');
var toggle        = $('.toggle');
var subToggle     = $('.has-children span');
var back          = '<div class="hide-submenu"></div>';
var subHide       = $(back);

// Toggle menu
toggle.on("click", function() {
  nav.toggleClass('is-visible');
  if(menu.hasClass('visually-hidden')) {
    menu.toggleClass('visually-hidden is-visible')
  } else {
    menu.removeClass('is-visible');
    // Wait for CSS animation
    setTimeout(function() {
      menu.addClass('visually-hidden');
    }, 200);
  }
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function includeHTML(divContainer, urlHTML) {
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) { divContainer.innerHTML = this.responseText; }
            if (this.status == 404) { divContainer.innerHTML = "Page not found."; }
        }
    }

    xhttp.open("GET", urlHTML, true);
    xhttp.send();
}
