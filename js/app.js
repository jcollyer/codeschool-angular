(function(){
  var gems= [
    {name: 'Azurite', price: 2.95, soldOut: false, canPurchase: true},
    {name: 'Bazzil', price: 4.95, soldOut: false, canPurchase: true},
    {name: 'Bbq-t', price: 1.95, soldOut: false, canPurchase: true}
  ];
  var app = angular.module('gemStore', []);
  app.directive('gemStore', function(){
    return {

    };
  });
  app.controller('StoreController', function(){
    this.products = gems;
  });
})();
