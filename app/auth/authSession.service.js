'use strict';

angular.module('ng-normal-auth').service('Session', function() {
    this.create = function(userId, userRole) {
        this.userId = userId;
        this.userRole = userRole;
    };
    this.destroy = function() {
        this.userId = null;
        this.userRole = null;
    };
});