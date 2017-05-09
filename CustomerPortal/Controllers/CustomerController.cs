using System.Net.Http;
using System.Web.Http;
using Portal.Web;
using System;

namespace CustomerPortal.Controllers
{
    public class CustomerController : BaseController {

        [Route("api/customers")]
        [HttpGet]
        public System.Collections.Generic.IEnumerable<CustomerData> GetLocations() {
            try {
                return App.Instance.GetLocations();
            } catch (Exception ex) {
                throw  new Exception ("CustomerController.GetCustomer", ex);
                
            }
        }


        [Route("api/customer")]
        [HttpPost]
        public void AddCustomer([FromBody]CustomerData cd) {
            try {
                App.Instance.AddCustomer(cd);
            } catch (Exception ex) {
                throw new Exception("CustomerController.AddCustomer", ex);
            }
        }

        [Route("api/cusEdit")]
        [HttpPost]
        public void EditCustomer([FromBody]CustomerData cd) {
            try {
                App.Instance.EditCustomer(cd);
            } catch (Exception ex) {
                throw new Exception("CustomerController.EditCustomer", ex);
            }
        }
    
        [Route("api/customer/{id}")]
        [HttpDelete]
        public void DeleteCustomer(int id) {
            try {
                App.Instance.DeleteCustomer(id);
            } catch (Exception ex) {
                throw new Exception("CustomerController.DeleteCustomer", ex);
            }
        }

    }
}