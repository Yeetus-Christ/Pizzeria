namespace Pizzeria.Domain.Entities
{
    public class Manager
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }

        public Manager()
        {

        }

        public Manager(string name, string password)
        {
            Name = name;
            Password = password;
        }
    }
}
