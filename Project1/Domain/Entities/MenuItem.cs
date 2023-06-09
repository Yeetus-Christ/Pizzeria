namespace Pizzeria.Domain.Entities
{
    public class MenuItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Type { get; set; }
        public ICollection<OrderMenuItem> OrderMenuItems { get; set; }

        public MenuItem()
        {
                
        }
        public MenuItem(int id, string name, float price, string description, string image, string type)
        {
            Id = id;
            Name = name;
            Price = price;
            Description = description;
            Image = image;
            Type = type;
        }


    }
}
