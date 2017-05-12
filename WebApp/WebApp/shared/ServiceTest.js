var ServiceTest = (function () {
    function ServiceTest($http) {
        this.$http = $http;
    }
    Object.defineProperty(ServiceTest.prototype, "http", {
        get: function () {
            return this.$http;
        },
        enumerable: true,
        configurable: true
    });
    return ServiceTest;
}());
//# sourceMappingURL=ServiceTest.js.map