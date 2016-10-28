angular.
module('item').
component('itemList', {
    templateUrl: 'item/item-list/item-list.template.html',
    controller: ['$location', function itemListController($location) {
        var ctrl = this;
        this.type = this.root.$link('items');
        this.items = this.type.follow().$followAll('items');
    }],
    bindings :{
      root: '<'
    }
});
