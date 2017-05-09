using System.Collections.Generic;

namespace WcfRestfulService.Domain
{
    public sealed class ProductsServer
    {
        private static List<Product> _products;
        private static ProductsServer _instance;
        private static readonly object LockMechanism = new object();
        public static ProductsServer Instance
        {
            get
            {
                if (_instance == null)
                {
                    //not really neccessary on a small project, but it is the Microsoft recommended pattern
                    lock (LockMechanism)
                    {
                        _instance = new ProductsServer();
                    }
                }
                return _instance;
            }
        }
        private ProductsServer()
        {
            Intialize();
        }
        private static void Intialize()
        {
            _products = new List<Product>
                            {
                                new Product() {ProductId = 1, Name = "Product 1", CategoryName = "Category 1", Price = 10},
                                new Product() {ProductId = 2, Name = "Product 2", CategoryName = "Category 1", Price = 5},
                                new Product() {ProductId = 3, Name = "Product 3", CategoryName = "Category 2", Price = 15},
                                new Product() {ProductId = 4, Name = "Product 4", CategoryName = "Category 3", Price = 9}
                            };
        }
        public List<Product> Products
        {
            get { return _products; }
        }
    }
}