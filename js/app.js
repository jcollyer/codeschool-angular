(function(){
  var gem = {name: 'Azurite', price: 2.95, soldOut: false, canPurchase: true};
  var app = angular.module('gemStore', []);
  app.directive('gemStore', function(){
    return {

    };
  });
  app.controller('StoreController', function(){
    this.product = gem;
  });
})();
