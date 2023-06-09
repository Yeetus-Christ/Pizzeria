namespace Pizzeria.Domain.Entities
{
    public class OrderMenuItem
    {
        public int OrderID { get; set; }
        public Order Order { get; set; }
        public int MenuItemID { get; set; }
        public MenuItem MenuItem { get; set; }
        public int Number { get; set; } = 1;

        public OrderMenuItem()
        {

        }

        public OrderMenuItem(int orderID, int menuItemID, int number)
        {
            OrderID = orderID;
            MenuItemID = menuItemID;
            Number = number;
        }
        public OrderMenuItem(int orderID, int menuItemID)
        {
            OrderID = orderID;
            MenuItemID = menuItemID;
        }
    }
}
