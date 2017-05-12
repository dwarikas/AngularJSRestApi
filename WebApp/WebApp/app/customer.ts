class Customer {
    cusId : number;
    firstName :String ="";
    lastName: String = "";
    email :String ="";
    phoneNumber :String = "";
    status :boolean = true;
    
    constructor(cusId: number, firstName: String, lastName: String, email: String, phoneNumber: String, status: boolean) {
        this.cusId = cusId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.status = status;
    }

  
}
//app.service('customer', Customer);