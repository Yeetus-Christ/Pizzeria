namespace Pizzeria.Domain.Entities
{
    public class Courier
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }

        public Courier()
        {

        }

        public Courier(string name, string password)
        {
            this.Name = name;
            this.Password = password;
        }
    }
}
