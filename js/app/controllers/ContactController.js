function ContactController($scope) {
    this.name = 'Bill Gates';
    this.email = 'william@microsoft.com'
}

angular
    .module('app')
    .controller('ContactController', ContactController);