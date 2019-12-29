function goTo(url)
{
  location.href = url;
}

var include = function(beReplacedId){
  jQuery.get('../views/templates/footer.html',function(data){
<<<<<<< HEAD
      jQuery(beReplacedId).replaceWith(data);  
});}

=======
      jQuery(beReplacedId).replaceWith(data);
  
});}
>>>>>>> Contacto
