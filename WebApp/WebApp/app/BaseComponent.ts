class BaseComponent {

      constructor() {
    }

    public get app(): App {
        return App.instance;
    }

    public get services(): AppServices {
        return this.app.services;
    }

    init() {

        this.startReq();
    }


    startReq() {
        var path = this.app.baseApi + 'customers';
        this.services.http.get(path)
            .then(r => this.endReq(r.data));
    }

    endReq(data) {

        this.app.customers = data;

    }
       
 

/*
    $onInit() {
        this.init();
    }

    init() { }
    */

}