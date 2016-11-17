angular.
module('item').
component('itemList', {
    bindings: {
        items: '<',
        onDeleteItem: '&',
        onOpenAddForm: '&',
        onOpenEditForm: '&',
        onViewItem: '&'
    },
    templateUrl: 'item/item-list/item-list.template.html',
    controller: function itemListController() {
        var ctrl = this;

        this.openAddForm = function() {
            ctrl.onOpenAddForm();
        }

        this.openEditForm = function(item) {
            ctrl.onOpenEditForm({
                item: item
            });
        }

        this.viewItem = function(item) {
            ctrl.onViewItem({
                item: item
            });
        }

        this.deleteItem = function(item) {
            ctrl.onDeleteItem({
                item: item
            });
        }

    }
});
