using Portal.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Portal.Web {
    public class CustomerData {

        public int cusId;
        public String firstName;
        public String lastName;
        public String email;
        public String phoneNumber;
        public Boolean status = false;

        public CustomerData() {
        }

        public CustomerData(Portal.Web.Customer  customer) {

            cusId = customer._cusId;
            firstName = customer._firstName;
            lastName = customer._lastName;
            email = customer._email;
            phoneNumber = customer._phoneNumber;
            status = customer._status;           

        }

        public Portal.Web.Customer ToCustomer() {
            var l = new Portal.Web.Customer(cusId, firstName, lastName, email, phoneNumber, status);
            return l;
        }


    }
}