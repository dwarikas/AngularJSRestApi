class App {

    static initData: any = {};
    static instance: App;

    customers: Customer[] = null;     
    baseApi: String = "http://localhost:56436/api/";

    static create($injector) {
        App.instance = new App($injector);
        return App.instance;
    }

    services: AppServices;  
    settings = {};
    data = {};

    constructor($injector) {

        this.services = $injector.instantiate(AppServices);
       // this.services.interval(() => this.onInterval(), 5000);// 
       
    }

    navigateByUrl(s: string) {
        var url: any = s;
        if (url.startsWith('http')) {
            window.open(url, '_blank');
        }
       // else this.services.rootRouter.navigateByUrl(s);
    }

  

    getSettings(name?) {
        return name ? this.settings[name] : this.settings;
    }

}











