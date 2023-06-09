using System.ComponentModel.DataAnnotations;

namespace Pizzeria.ReadModels
{
    public record MenuItemRm
    (
        [Required]int Id,
        string Name,
        float Price,
        string Description,
        string Image, 
        string Type
    );
}
