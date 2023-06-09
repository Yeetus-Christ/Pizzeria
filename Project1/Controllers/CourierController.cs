using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pizzeria.Data;
using Pizzeria.ReadModels;
using Microsoft.EntityFrameworkCore;
using Pizzeria.Domain.Entities;
using Pizzeria.Dtos;

namespace Pizzeria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourierController : ControllerBase
    {
        private readonly Entities _entities;
        private readonly ILogger<MenuController> _logger;

        public CourierController(ILogger<MenuController> logger, Entities entities)
        {
            _logger = logger;
            _entities = entities;
        }


        [HttpGet("findOrders")]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(IEnumerable<OrderRm>), 200)]
        public IEnumerable<OrderRm> SearchOrders(string courier, string status)
        {
            var orderRmList = _entities.Orders
                .Where(m => m.Courier == courier && m.Status == status)
                .Select(order => new OrderRm(
                order.Id,
                order.TotalPrice,
                order.ClientName,
                order.Email,
                order.Adress,
                order.Status,
                order.Courier
                ));
            return orderRmList;
        }

        [HttpPut("updateOrder")]
        [ProducesResponseType(500)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult UpdateOrder(int id, string status)
        {
            var order = _entities.Database
                .ExecuteSqlRaw($"Update Orders Set Status = '{status}' where Id = {id}");

            return Ok("Successfuly updated order");
        }
    }
}
