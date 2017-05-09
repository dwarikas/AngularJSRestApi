var app = angular.module('app', []);
//app.value('$routerRootComponent', 'app');// 

class AppComponent {    
    customers: Customer[] = null;
    customer: Customer = null;
    addCus: Customer = null;
    baseApi: String = "http://localhost:56436/api/";

    get http(): ng.IHttpService {
        return <ng.IHttpService>this.$http;
    }



    constructor(private $http) {             

        this.init();

    }


    init() {

        this.startReq();
    }


    startReq() {
        var path = this.baseApi + 'customers';
        this.$http.get(path)
            .then(r => this.endReq(r.data));
    }

    endReq(data) {
       
        this.customers = data;

    }


    addCustomer() {       

        var max = 0;      
        this.customers.map(function (cus) { if (cus.cusId > max) { max = cus.cusId } });
        var cusId = ++max;//increment customerId by one  
        this.addCus.cusId = cusId;
        var path = this.baseApi + 'customer';
        this.$http.post(path, JSON.stringify(this.addCus), { headers: { contentType: 'application/json', dataType: 'json' } })
            .then(r => this.startReq());

        this.clear();

    }

    clear() {
        this.addCus = null;
    }

    deleteCustomer(r) {

        this.customer = r;
        var path = this.baseApi + "customer/" + this.customer.cusId;
        this.$http.delete(path).then(r => this.startReq());


    }

    edit(r) {
        this.customer = r;
    }

    editCustomer() {

        //this.customer = r;      
        var path = this.baseApi + 'cusEdit';
        this.customer;
        this.$http.post(path, JSON.stringify(this.customer), { headers: { contentType: 'application/json', dataType: 'json' } })
            .then(r => this.startReq());

    }


};

app.component('app', {
    templateUrl: 'app/app.html',
    controller: AppComponent,
    controllerAs: 'vm'
    /*  ,
     $routeConfig: [
         { path: '/customer', name: 'Customer', component: 'customer', useAsDefault: false }
     ]
  */
}
);