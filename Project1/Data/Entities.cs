using Microsoft.EntityFrameworkCore;
using Pizzeria.Domain.Entities;

namespace Pizzeria.Data
{
    public class Entities : DbContext
    {
        public DbSet<MenuItem> MenuItems => Set<MenuItem>();
        public DbSet<Ingredient> Ingredients => Set<Ingredient>();
        public DbSet<Order> Orders => Set<Order>();
        public DbSet<OrderMenuItem> OrderMenuItems => Set<OrderMenuItem>();
        public DbSet<Manager> Manager => Set<Manager>();
        public DbSet<Courier> Couriers => Set<Courier>();
        public DbSet<Chef> Chefs => Set<Chef>();

        public Entities(DbContextOptions<Entities> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderMenuItem>()
        .HasKey(op => new { op.MenuItemID, op.OrderID });
            modelBuilder.Entity<OrderMenuItem>()
                .HasOne(op => op.Order)
                .WithMany(o => o.OrderMenuItems)
                .HasForeignKey(op => op.OrderID);
            modelBuilder.Entity<OrderMenuItem>()
                .HasOne(op => op.MenuItem)
                .WithMany(c => c.OrderMenuItems)
                .HasForeignKey(op => op.MenuItemID);
        }
    }
}
