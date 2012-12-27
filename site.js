var kerouac = require('kerouac');
var site = kerouac();

site.set('base url', 'http://anchorjs.org/');
site.set('output', 'anchorjs.org');

site.engine('ejs', require('ejs-locals'));

site.content('content');
site.static('public');

site.plug(require('kerouac-sitemap')());
site.plug(require('kerouac-robotstxt')());


/**
 * .htaccess
 */
;(function() {
})();


site.generate(function(err) {
  if (err) {
    console.error(err.message);
    console.error(err.stack);
    return;
  }
});
