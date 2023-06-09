namespace Pizzeria.ReadModels
{
    public record OrderRm
    (
      int Id,
      float TotalPrice,
      string Name,
      string Email,
      string Adress,
      string Status,
      string Courier
    );
}
