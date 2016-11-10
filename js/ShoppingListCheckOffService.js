/**
 * Created by Charu on 11/10/2016.
 */
(function(){
    'use strict';
    angular.module("ShoppingListCheckOff")
        .service("ShoppingListCheckOffService", function(){
        var service=this;

        //mock data to be shared by both controllers
        service.toBuy=[
            { name: "cookies", quantity: 2 },
            { name: "chips", quantity: 6 },
            { name: "pepsi", quantity: 4 },
            { name: "noodles", quantity: 8 },
            { name: "susie", quantity: 1 }
        ];

        //holds bought items
        service.bought=[];

        //returns tobuy list
        service.getToBuyList=function(){
            return service.toBuy;
        };

        //returns bought list
        service.getBoughtList=function(){
            return service.bought;
        };

        //check duplicate buy and restrict if already bought
        service.keepBoughtItem=function(newItem){
            if(service.bought.indexOf(newItem) === -1){
                //not duplicate so put in bought list
                service.bought.push(newItem);
            }
        };

        return service;
    });
})();