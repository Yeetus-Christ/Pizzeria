using System.ComponentModel.DataAnnotations;

namespace Pizzeria.Dtos
{
    public record OrderMenuItemDto
    (
        [Required] int OrderId,
        [Required] int MenuItemId,
        [Required][Range(1,200000)] int Number
        );
}
