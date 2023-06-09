using System.ComponentModel.DataAnnotations;

namespace Pizzeria.Dtos
{
    public record OrderDto
    (
    [Required][Range(1, 2147483647)] int Id,
    [Required][Range(1, 200000)] float TotalPrice,
    string Name,
    string Email,
    string Adress,
    string Status,
    string Courier
    );
}
