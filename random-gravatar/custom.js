$("#geturl").click(function() {
  var gravatar = $("input:checked").val();
  var rand = Math.floor((Math.random()*100000000000000)+1);
  $("body").append('<div class="avatar"><a href="http://gravatar.com/avatar/'+rand+'?d='+gravatar+'"  class="avatar__link"><img  src="http://gravatar.com/avatar/'+rand+'?d='+gravatar+'" class="avatar__image"/></a></div>');
});
