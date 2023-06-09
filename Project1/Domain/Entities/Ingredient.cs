namespace Pizzeria.Domain.Entities
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }

        public Ingredient()
        {

        }
        public Ingredient(int id, string name, float price)
        {
            Id = id;
            Name = name;
            Price = price;
        }
    }
}
