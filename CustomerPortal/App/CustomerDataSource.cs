using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portal.Web {
    //http://localhost:56436/api/customers
    public class CustomerDataSource {
        List<Customer> _customers = null;

        public CustomerDataSource() {

            _customers = new List<Customer>() {
                new Customer(1, "Dwarika", "Silwal", "dwarika.silwal@gmail.com  ", "7034016213",  true),
                new Customer(2, "Jame", "Smith", "smith984@gmail.com  ", "5873527789",  true),
                new Customer(3, "Gordon", "White", "gordon9855@gmail.com  ", "5873527788",  true),
                new Customer(4, "Dan", "Killian", "killian541@gmail.com  ", "6873527788",  true),
                new Customer(5, "Marvin", "Guster", "Marvin845@gmail.com  ", "7034016213",  true),
                new Customer(6, "Susan", "Gustav", "Susan599@gmail.com  ", "7034016213",  true),
                new Customer(7, "Sky", "Cage", "Sky5852@gmail.com  ", "7034016213",  true),
                new Customer(8, "Daisy", "Young", "Daisy989@gmail.com  ", "7034016213",  true),
                new Customer(9, "Duke", "Jackson", "Duke4465@gmail.com  ", "7034016213",  true),
            };
           
        }

        public void AddCustomer(Customer customer) {
            //add cutomer to an array           
            if (_customers != null) {               
                 _customers.Add(customer);
            }
            
        }

        public void EditCustomer(Customer customer) {
            //edit cutomer to an array           
            var cus = _customers.SingleOrDefault(c => c._cusId == customer._cusId);
            if (cus != null) {
                _customers.Remove(cus);
                _customers.Add(customer);
            }

        }

        public void DeleteCustomer(int id) {
            //remove cutomer from an array
            var customer = _customers.SingleOrDefault(c => c._cusId == id);
            if (customer !=null) {
                _customers.Remove(customer);
            }
           
           
        }

        public IEnumerable<Customer> GetCustomer() {
            IEnumerable<Customer> cus = _customers;
            return cus;

        }



    }
}
