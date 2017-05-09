using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portal.Web
{
    public class Customer {

        public int _cusId;
        public String _firstName;
        public String _lastName;
        public String _email;
        public String _phoneNumber;
        public Boolean _status = false;
        

        public Customer() {
        }

        public Customer(int cusId, String firstName, String lastName, String email, String phoneNumber, Boolean status) {
             _cusId = cusId;
            _firstName = firstName;
            _lastName = lastName;
            _email = email;
            _phoneNumber = phoneNumber;
            _status = status;
            

        }

    }
}
