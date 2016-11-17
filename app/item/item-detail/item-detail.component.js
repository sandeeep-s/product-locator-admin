angular.module('item')
    .component('itemDetail', {
        bindings: {
            item: '<',
            mode: '@',
            onClose: '&',
            onCreate: '&',
            onUpdate: '&'
        },
        templateUrl: 'item/item-detail/item-detail.template.html',
        controller: function itemDetailController() {
            var ctrl = this;

            if ("view" == this.mode) {
                ctrl.editMode = false;
            } else {
                ctrl.editMode = true;
            }

            this.createItem = function() {

                ctrl.onCreate({
                    item: ctrl.item
                });

            };

            this.updateItem = function() {

                ctrl.onUpdate({
                    item: ctrl.item
                });

            }

            this.cancel = function() {
                ctrl.onClose();
            };

        }
    });
