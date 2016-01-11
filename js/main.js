/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var anytimeComputers = angular.module('anytimeComputers', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
anytimeComputers.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "home.html", controller: "PageCtrl"})
    // Pages
    .when("/contact", {templateUrl: "contact.html", controller: "PageCtrl"})
    .when("/location", {templateUrl: "location.html", controller: "PageCtrl"})
    // Blog
    // .when("/blog", {templateUrl: "blog.html", controller: "BlogCtrl"})
    // .when("/blog/post", {templateUrl: "blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
anytimeComputers.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
anytimeComputers.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // // Activates the Carousel
  // $('.carousel').carousel({
  //   interval: 5000
  // });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

