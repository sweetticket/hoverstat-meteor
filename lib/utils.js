GARecordPage = function(pageLocation) {
  ga('create', 'UA-63928599-1', 'auto');
  ga('send', 'pageview', {
    page: pageLocation
  });
}