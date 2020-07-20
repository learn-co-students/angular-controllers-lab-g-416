// function StaffController($scope) {
//     $scope.name = 'Steve Jobs';
//     $scope.email = 'steve@apple.com';
// }
function StaffController() {
    this.name = 'Steve Jobs';
    this.email = 'steve@apple.com';
}
angular
    .module('app')
    .controller('StaffController', StaffController);