// function ContactController($scope) {
//     $scope.name = 'Bill Gates';
//     $scope.email = 'william@microsoft.com'
// }
function ContactController() {
    this.name = 'Bill Gates';
    this.email = 'william@microsoft.com'
}
angular
    .module('app')
    .controller('ContactController', ContactController);