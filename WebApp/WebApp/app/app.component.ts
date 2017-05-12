var app = angular.module('app', []);
//app.value('$routerRootComponent', 'app');// 

class AppComponent extends BaseAppComponnet {    
    
    constructor($injector) {
        super($injector);         
        this.init();         
    }
       
};

app.component('app', {
    templateUrl: 'app/app.component.html',
    controller: AppComponent,
    controllerAs: 'vm'
    /*  ,
     $routeConfig: [
         { path: '/customer', name: 'Customer', component: 'customer', useAsDefault: false }
     ]
  */
}
);