namespace Pizzeria.Domain.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public float TotalPrice { get; set; } = 0;
        public string ClientName { get; set; } = "";
        public string Email { get; set; } = "";
        public string Adress { get; set; } = "";
        public string Status { get; set; } = "Pending";
        public string Courier { get; set; } = "";
        public ICollection<OrderMenuItem> OrderMenuItems { get; set; }

        public Order()
        {

        }
        public Order(float totalPrice)
        {
            TotalPrice = totalPrice;
        }
    }
}
