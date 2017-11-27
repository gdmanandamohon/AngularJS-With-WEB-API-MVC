var EmpControllers = angular.module("EmpControllers", []);



EmpControllers.controller("ListController", ['$scope', '$http', '$routeParams',
    function ($scope, $http) {
        $http.get('/api/employee').then(function (data) {
            debugger;
            //the controller
            
            $scope.employees = data.data;
        },
        function errorCallback(error) {
            $scope.error = "An error has occured while adding employee! " + error.ExceptionMessage;
        });
        debugger;

        /*$http.get('/api/pager').then(function (data) {
            $scope.page = data.data;
        }, function (data) { });*/


        $scope.page = [1,2,3,10];
        /*$scope.loadMore = function () {
            debugger;
            
            $http.get('/api/pager').then(function (data) {
                $scope.page = data.data;
            }, function (data) { });
            $scope.totalDisplayed = $scope.page;
        };*/
        $scope.listOrderBy = (function (orderBy) {
            debugger;
            $scope.orderByType = orderBy;
        });
    }


]);

EmpControllers.controller("DeleteController", ['$scope', '$http', '$routeParams', '$location',
    function ($scope, $http, $routeParams, $location) {
        $scope.id = $routeParams.id;
        debugger;

        $http({
            method: "GET", 
            url: "/api/employee/",
            params: { id: $scope.id },
        }).then(function callback(data) {
            $scope.firstname = data.data.FirstName;
            $scope.lastname = data.data.LastName;
            $scope.country = data.data.Country;
            $scope.state = data.data.State;
            $scope.salary = data.data.Salary;
            $scope.active = data.data.IsActive;
            $scope.dob = data.data.DateofBirth;
            $scope.description = data.data.Description;
        });

        $scope.delete = function () {

            $http.delete('/api/Employee/' + $scope.id)
           .then(
               function (response) {
                   //success call back
                   $location.path('/list');
               },
               function (response) {
                   // failure call back
                   $scope.error = "An error has occured while deleting employee! " + data;
               }
            );
        };
    }
]);

EmpControllers.controller("EditController", ['$scope', '$filter', '$http', '$routeParams', '$location',
    function ($scope, $filter, $http, $routeParams, $location) {
        debugger;
        $http.get('/api/country').then(function (data) {
            $scope.countries = data.data;
        }, function (data) { });

        $scope.id = 0;
        $scope.getStates = (function() {
            var country = $scope.country;
            if (country) {
                $http.get('/api/country/' + country).then(function(data) {
                    $scope.states = data.data;
                });
            } else {
                $scope.states = null;
            }
        });

        $scope.save = (function() {
            var obj = {
                EmployeeId: $scope.id,
                FirstName: $scope.firstname,
                LastName: $scope.lastname,
                Country: $scope.country,
                State: $scope.state,
                Salary: $scope.salary,
                IsActive: $scope.active,
                Description: $scope.description,
                DateofBirth: $scope.dob
            };
            if ($scope.id == 0) {
                $http.post('/api/Employee/', obj).then(function(data) {
                    $location.path('/list');
                }, function(data) {
                    $scope.error = "An error has occured while adding employee! " + data.ExceptionMessage;
                });
            } else {
                $http.put('/api/Employee/', obj).then(function(data) {
                    $location.path('/list');
                }, function(data) {
                    console.log(data);
                    $scope.error = "An Error has occured while Saving customer! " + data.ExceptionMessage;
                });
            }
        });

        if ($routeParams.id) {
            $scope.id = $routeParams.id;
            $scope.title = "Edit Employee";
            $http.get('/api/employee/' + $routeParams.id).then(function (data) {
                $scope.firstname = data.data.FirstName;
                $scope.lastname = data.data.LastName;
                $scope.country = data.data.Country;
                $scope.state = data.data.State;
                $scope.salary = data.data.Salary;
                $scope.active = data.data.IsActive;
                $scope.description = data.data.Description;
                $scope.dob = new Date(data.data.DateofBirth);
                $scope.getStates();
            }, function (error){});
        }
        else {
            $scope.title = "Create New Employee";
        }
    }
]);