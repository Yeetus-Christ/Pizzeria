using Pizzeria.Domain.Entities;

namespace Pizzeria.ReadModels
{
    public record OrderMenuItemRm
    (
        int OrderId,
        int MenuItemID,
        int Number
    );
}
