function goTo(url)
{
  location.href = url;
}

var include = function(beReplacedId){
  jQuery.get('../views/templates/footer.html',function(data){
      jQuery(beReplacedId).replaceWith(data);  
});}
