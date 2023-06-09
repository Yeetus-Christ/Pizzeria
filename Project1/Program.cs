using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Pizzeria.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<Entities>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("Pizzeria")));
builder.Services.AddControllersWithViews();

builder.Services.AddSwaggerGen(c => {
    c.AddServer(new OpenApiServer
    {
        Description = "Development Server",
        Url = "http://localhost:5215"
    });
    c.CustomOperationIds(e => $"{e.ActionDescriptor.RouteValues["action"] + e.ActionDescriptor.RouteValues["controller"]}");
});

builder.Services.AddScoped<Entities>();

var app = builder.Build();

var entities = app.Services.CreateScope().ServiceProvider.GetService<Entities>();

entities.Database.EnsureCreated();

app.UseSwagger().UseSwaggerUI();

app.UseCors(builder => builder
.WithOrigins("*")
.AllowAnyMethod()
.AllowAnyHeader()
);

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
