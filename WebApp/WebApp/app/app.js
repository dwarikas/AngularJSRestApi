var app = angular.module('app', []);
//app.value('$routerRootComponent', 'app');// 
var AppComponent = (function () {
    function AppComponent($http) {
        this.$http = $http;
        this.customers = null;
        this.customer = null;
        this.addCus = null;
        this.baseApi = "http://localhost:56436/api/";
        this.init();
    }
    Object.defineProperty(AppComponent.prototype, "http", {
        get: function () {
            return this.$http;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.init = function () {
        this.startReq();
    };
    AppComponent.prototype.startReq = function () {
        var _this = this;
        var path = this.baseApi + 'customers';
        this.$http.get(path)
            .then(function (r) { return _this.endReq(r.data); });
    };
    AppComponent.prototype.endReq = function (data) {
        this.customers = data;
    };
    AppComponent.prototype.addCustomer = function () {
        var _this = this;
        var max = 0;
        this.customers.map(function (cus) { if (cus.cusId > max) {
            max = cus.cusId;
        } });
        var cusId = ++max; //increment customerId by one  
        this.addCus.cusId = cusId;
        var path = this.baseApi + 'customer';
        this.$http.post(path, JSON.stringify(this.addCus), { headers: { contentType: 'application/json', dataType: 'json' } })
            .then(function (r) { return _this.startReq(); });
        this.clear();
    };
    AppComponent.prototype.clear = function () {
        this.addCus = null;
    };
    AppComponent.prototype.deleteCustomer = function (r) {
        var _this = this;
        this.customer = r;
        var path = this.baseApi + "customer/" + this.customer.cusId;
        this.$http.delete(path).then(function (r) { return _this.startReq(); });
    };
    AppComponent.prototype.edit = function (r) {
        this.customer = r;
    };
    AppComponent.prototype.editCustomer = function () {
        var _this = this;
        //this.customer = r;      
        var path = this.baseApi + 'cusEdit';
        this.customer;
        this.$http.post(path, JSON.stringify(this.customer), { headers: { contentType: 'application/json', dataType: 'json' } })
            .then(function (r) { return _this.startReq(); });
    };
    return AppComponent;
}());
;
app.component('app', {
    templateUrl: 'app/app.html',
    controller: AppComponent,
    controllerAs: 'vm'
});
//# sourceMappingURL=app.js.map