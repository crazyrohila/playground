function nameRandcolor($scope) {
  $scope.names = [];
  $scope.addtext = function() {
    $scope.names.push({text:$scope.texT});
    $scope.texT = '';
    var randombackground = Math.floor(Math.random()*16777215).toString(16);
    $("body").css({
        backgroundColor: '#' + randombackground
    });
    $('#cloud p').each(function(){
      var randomcolor = Math.floor(Math.random()*16777215).toString(16);
      var randleft = Math.floor(Math.random()*61) + 20;
      var randtop = Math.floor(Math.random()*61) + 10;
      $(this).css({
        color: '#' + randomcolor,
        top: randtop+'%',
        left: randleft+'%',
      });
    });
  };
}
