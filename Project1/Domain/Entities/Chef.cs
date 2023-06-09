namespace Pizzeria.Domain.Entities
{
    public class Chef
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }

        public Chef()
        {

        }

        public Chef(string name, string password)
        {
            this.Name = name;
            this.Password = password;
        }
    }
}
