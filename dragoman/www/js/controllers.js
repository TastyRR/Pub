angular.module('starter.controllers',[])

.controller('HomeCtrl', function($scope) {
  $scope.items = [
    {
      'avatar':"img/adam.jpg",
      'name':"adam",
      'description':'这个人很懒，什么都没留下',
      'picture':"img/adam.jpg",

    },
    {
      'avatar':"img/ben.png",
      'name':"ben",
      'description':'这个人很懒，什么都没留下',
      'picture':"img/ben.png",

    }
  ];
  $scope.doRefresh = function(){

  };
  $scope.refresh = function(){

  };
})

.controller('SearchCtrl', function($scope) {
  
})

.controller('PhotoCtrl', function($scope,$timeout,$cordovaCamera){
 var options = {  
      quality: 50,  
      destinationType: Camera.DestinationType.DATA_URL,  
      sourceType: Camera.PictureSourceType.CAMERA,  
      allowEdit: true,  
      encodingType: Camera.EncodingType.JPEG,  
      targetWidth: 100,  
      targetHeight: 100,  
      popoverOptions: CameraPopoverOptions,  
      saveToPhotoAlbum: false  
  };  

  $scope.pickImage = function(){
      $cordovaCamera.getPicture(options).then(function(imageData) {  
      $scope.fetchImage = imageData;
    }, function(err) {  
      console.log("fetch image error"); 
    }); 
  };
  
  $scope.$on('$ionicView.enter',function(){
      $cordovaCamera.getPicture(options).then(function(imageData) {  
      $scope.fetchImage = imageData;
      }, function(err) {  
        console.log("fetch image error"); 
      }); 
  });
})

.controller('DynamicCtrl', function($scope) {

 
})

.controller('AccountCtrl', function($scope) {
  
});
