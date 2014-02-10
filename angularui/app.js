var xApp = angular.module('xApp', [
  'ui.map',
  'ui.bootstrap'
  ]);

function initCall() {
  console.log('Google maps api initialized.');
  angular.bootstrap(document.getElementsByTagName('html'), ['xApp']);
}


xApp.controller('MapCtrl', function ($scope, $http) {

  //$scope.selected = undefined;

  $scope.myMarkers = [];

  $scope.mapOptions = {
    center: new google.maps.LatLng(35.784, -78.670),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  $scope.getLocation = function(val) {
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(res) {
      var addresses = [];
      angular.forEach(res.data.results, function(item) {
        addresses.push(item.formatted_address);
      });
      return addresses;
    });
  };

  $scope.addmark = function($event, $params) {
    var geocoder = new google.maps.Geocoder();
    var geocoderRequest = { address: $scope.asyncSelected };
    return geocoder.geocode(geocoderRequest, function(results, status) {
      var location = {};
      location = results[0].geometry.location;
      $scope.myMarkers.push(new google.maps.Marker({
        map: $scope.myMap,
        position: location
      }));
      $scope.myMap.panTo(location);
    });
  };

  $scope.setZoomMessage = function (zoom) {
    $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
    console.log(zoom, 'zoomed');
  };

  $scope.openMarkerInfo = function (marker) {
    $scope.currentMarker = marker;
    $scope.currentMarkerLat = marker.getPosition().lat();
    $scope.currentMarkerLng = marker.getPosition().lng();
    $scope.myInfoWindow.open($scope.myMap, marker);
  };

  $scope.setMarkerPosition = function (marker, lat, lng) {
    marker.setPosition(new google.maps.LatLng(lat, lng));
  };

});
