var EmpApp = angular.module('EmpApp', ['ngRoute', 'EmpControllers']);
EmpApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/list',
    {
        templateUrl: 'AngularJS/views/List.html',
        controller: 'ListController'
    }).
    when('/create',
    {
        templateUrl: 'AngularJS/views/Edit.html',
        controller: 'EditController'
    }).
    when('/edit/:id',
    {
        templateUrl: 'AngularJS/views/Edit.html',
        controller: 'EditController'
    }).
    when('/delete/:id',
    {
        templateUrl: 'AngularJS/views/Delete.html',
        controller: 'DeleteController'
    }).
    otherwise(
    {
        redirectTo: '/list'
    });
}]);