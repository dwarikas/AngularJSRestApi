using System;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;
using WcfRestfulService.Domain;

namespace WcfRestfulService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "ProjectService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select ProjectService.svc or ProjectService.svc.cs at the Solution Explorer and start debugging.
    public class ProductService : IProductService
    {

        List<Product> IProductService.GetProductList()
        {
            return ProductsServer.Instance.Products;
        }
    }
}
