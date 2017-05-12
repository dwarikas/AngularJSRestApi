class AppServices {

/*
    static $mdThemingProvider: any;
     get themingProvider(): any {
        return AppServices.$mdThemingProvider;
    }
    
    get rootRouter(): any {
        return this.$rootRouter;
    }  


    get dialog(): any {
        return this.$mdDialog;
    }
    */

   

    get log(): angular.ILogService {
        return <angular.ILogService>this.$log;
    }

    get location(): angular.ILocationService {
        return <angular.ILocationService>this.$location;
    }

    get interval(): any {
        return this.$interval;
    }

    get timeout(): any {
        return this.$timeout;
    }

    get http(): angular.IHttpService {
        return <angular.IHttpService>this.$http;
    }
     

    constructor(private $http, private $timeout, private $interval, private $location, private $log ) {
   }

}
