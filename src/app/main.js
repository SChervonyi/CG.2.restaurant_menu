angular
 
    .module("TodoInputView", [])
    .directive("todoInputView", TodoInputView)
    .controller("TodoInputViewController", TodoInputViewController);

/**
 * Directive to represent input fields and list of added items
 */
function TodoInputView(){
    let directive = {
        scope: {}, //isolate from global scope
        templateUrl: 'app/todoInputView.html', //Bind directive with html view
        restrict: 'EA',
        controller: 'TodoInputViewController', //Bind directive with 'TodoInputViewController' controller
        bindToController: true,
        controllerAs: 'vm' // Abriviature from ViewModel
    };
    return directive;
}

function TodoInputViewController(){
    let vm = this;
    init(); //Initialize some preconditions

    function init(){
        vm.addRec = ""; //Declare 'addRec' variable. Actually it doesn't mandatory if you comment this line all will works fine.
        vm.products = ["Hello!"];
    }

        vm.addRecord = function (){ //Add 'addRecord' function to controller scope
        vm.errortext = "";

        if (!vm.addRec) return;

        if (vm.products.indexOf(vm.addRec) == -1) {
            vm.products.push(vm.addRec);
        } else {
            vm.errortext = "Attention. Record exists!";
        }
        }

    vm.removeRecord = function (x){ //Add 'removeRecord' function to controller scope
        vm.errortext = "";
        vm.products.splice(x, 1);
    }
}

