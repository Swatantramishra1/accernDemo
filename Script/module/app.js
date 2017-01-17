/// <reference path="../../view/dashboard.html" />
var app = angular.module("app", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/Index");
    //
    // Now set up the states
    $stateProvider
      .state('Index', {
          url: "/Index",
          templateUrl: "../../view/dashboard.html",
          controller: "home.Ctrl"
      })
       .state('Company', {
           url: "/Company",
           templateUrl: "../../view/company.html",
           controller: "home.Ctrl"
       })
    .state('Resource', {
        url: "/Resource",
           templateUrl: "../../view/resource.html",
           controller: "home.Ctrl"
    })
    .state('Contact', {
        url: "/Contact",
        templateUrl: "../../view/contact.html",
        controller: "home.Ctrl"
    })
});