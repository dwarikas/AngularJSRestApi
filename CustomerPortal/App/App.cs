using System.Collections.Generic;


namespace Portal.Web {
    public class App {
        const int maxAlerts = 50;

        #region Static
        static App app;
        static App() {
            app = new App();
        }
        public static App Instance {
            get { return app; }
        }

        #endregion


        CustomerDataSource customerDataSource = new CustomerDataSource();


        internal IEnumerable<CustomerData> GetLocations() {
            lock (syncRoot) {
                foreach (var c in customerDataSource.GetCustomer()) {
                    yield return new CustomerData(c);
                }
            }

        }


        internal void AddCustomer(CustomerData cd) {
            lock (syncRoot) {              
                customerDataSource.AddCustomer(cd.ToCustomer());
            }
        }


        internal void DeleteCustomer(int id) {
            lock (syncRoot) {
                customerDataSource.DeleteCustomer(id);
            }
        }


        internal void EditCustomer(CustomerData cd) {
            lock (syncRoot) {
                customerDataSource.EditCustomer(cd.ToCustomer());
            }
        }

        System.Timers.Timer timer = new System.Timers.Timer();
        object syncRoot = new object();

        #region Config
        int timerIntervalMs = 5000;
        #endregion

        private App() {

            timer.Interval = this.timerIntervalMs;

        }




        public void Start() {
            timer.Start();
        }

        public void Stop() {
            timer.Stop();
        }

    }

}
