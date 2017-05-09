using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;
using WcfRestfulService.Domain;

namespace WcfRestfulService
{
    
    [ServiceContract]
    public interface IProductService
    {
        [OperationContract]
        [WebInvoke(Method = "GET",
           ResponseFormat = WebMessageFormat.Json,
           RequestFormat = WebMessageFormat.Json,
           BodyStyle = WebMessageBodyStyle.Bare,
           UriTemplate = "GetProductList/")]
        List<Product> GetProductList();
    }
}
