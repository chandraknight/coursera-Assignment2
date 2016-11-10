(function(){
    'use strict';

    angular.module("ShoppingListCheckOff", []);

    //controller 1 with ShoppingListCheckOffService dependency injected
    angular.module("ShoppingListCheckOff")
        .controller("ToBuyController",
        ["ShoppingListCheckOffService", function(ShoppingListCheckOffService){
        var vm=this;
        vm.disable=false;
        vm.toBuy=ShoppingListCheckOffService.getToBuyList();
        vm.buy=function(toBuyItem){
            ShoppingListCheckOffService.keepBoughtItem(toBuyItem);
        };
    }]);

    //controller 2 ShoppingListCheckOffService dependency injected
    angular.module("ShoppingListCheckOff").
    controller("AlreadyBoughtController", ["ShoppingListCheckOffService",
        function(ShoppingListCheckOffService){
        var vm=this;
        vm.bought=ShoppingListCheckOffService.getBoughtList();
    }]);

})();
