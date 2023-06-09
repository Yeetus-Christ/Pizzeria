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
    public class ManagerController : ControllerBase
    {

        private readonly Entities _entities;
        private readonly ILogger<MenuController> _logger;

        public ManagerController(ILogger<MenuController> logger, Entities entities)
        {
            _logger = logger;
            _entities = entities;
        }


        [HttpGet("findOrders")]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(IEnumerable<OrderRm>), 200)]
        public IEnumerable<OrderRm> SearchOrders()
        {
            var orderRmList = _entities.Orders.Select(order => new OrderRm(
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

        [HttpGet("findMenuItems")]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(IEnumerable<MenuItemRm>), 200)]
        public IEnumerable<MenuItemRm> SearchMenuItems()
        {
            var menuItemRmList = _entities.MenuItems.Select(menuItem => new MenuItemRm(
                menuItem.Id,
                menuItem.Name,
                menuItem.Price,
                menuItem.Description,
                menuItem.Image,
                menuItem.Type
                ));
            return menuItemRmList;
        }

        [HttpGet("findCouriers")]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(IEnumerable<CourierRm>), 200)]
        public IEnumerable<CourierRm> SearchCouriers()
        {
            var courierRmList = _entities.Couriers.Select(courier => new CourierRm(
                courier.Id,
                courier.Name,
                courier.Password
                ));
            return courierRmList;
        }

        [HttpPut("updateMenuItem")]
        [ProducesResponseType(500)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult UpdateMenuItem(int id, string name, string description, float price) {
            var menuItem = _entities.Database
                .ExecuteSqlRaw($"Update MenuItems Set Name = '{name}', Price = {price}, Description = '{description}' where Id = {id}");

            return Ok("Successfuly updated menu item");
        }

        [HttpPut("updateOrder")]
        [ProducesResponseType(500)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult UpdateOrder(int id, string status, string courier)
        {
            var order = _entities.Database
                .ExecuteSqlRaw($"Update Orders Set Status = '{status}', Courier = '{courier}' where Id = {id}");

            return Ok("Successfuly updated order");
        }

        [HttpGet("getOrderItems")]
        public ActionResult<IEnumerable<MenuItemRm>> GetOrderItems(int id)
        {
            var menuItems = _entities.MenuItems
                .FromSqlRaw($"SELECT * FROM MenuItems WHERE Id IN (SELECT MenuItemID FROM OrderMenuItems WHERE OrderID = {id})");

            return Ok(menuItems);

        }
    }
}
