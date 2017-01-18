app.controller("home.Ctrl", ['$scope', '$rootScope', function ($scope, $rootScope) {

    $rootScope.Redirect_ToLogin = function ()
    {
        window.open('https://app.accern.com/login')
        
    }
}]);