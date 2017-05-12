class CustomerComponent extends BaseComponent {
 
    addCus: Customer = null;
    customer: Customer = null;  

    constructor() {
        super();        
    }

    addCustomer() {

        var max = 0;
        this.app.customers.map(function (cus) { if (cus.cusId > max) { max = cus.cusId } });
        var cusId = ++max;//increment customerId by one  
        var cusId = 15;
        this.addCus.cusId = cusId;
        var path = this.app.baseApi + 'customer';
        this.services.http.post(path, JSON.stringify(this.addCus), { headers: { contentType: 'application/json', dataType: 'json' } })
            .then(r => this.startReq());

        this.clear();

    }

    deleteCustomer(r) {

        this.customer = r;
        var path = this.app.baseApi + "customer/" + this.customer.cusId;
        this.services.http.delete(path).then(r => this.startReq());


    }

    edit(r) {
        this.customer = r;
    }

    editCustomer() {

        //this.customer = r;      
        var path = this.app.baseApi + 'cusEdit';
        this.services.http.post(path, JSON.stringify(this.customer), { headers: { contentType: 'application/json', dataType: 'json' } })
            .then(r => this.startReq());

    }
    
    clear() {
        this.addCus = null;
    }

};

angular.module('app')
    .component('customer', {
        templateUrl: 'app/customer.component.html',
        controller: CustomerComponent,
        controllerAs: 'vm'        
    }
    );
