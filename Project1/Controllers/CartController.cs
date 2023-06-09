using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pizzeria.Data;
using Pizzeria.ReadModels;
using Microsoft.EntityFrameworkCore;
using Pizzeria.Domain.Entities;
using Pizzeria.Dtos;

namespace Pizzeria.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        #region Variables

        private readonly Entities _entities;
        private readonly ILogger<MenuController> _logger;

        public CartController(ILogger<MenuController> logger, Entities entities)
        {
            _logger = logger;
            _entities = entities;
        }
        #endregion

        #region Requests

        [HttpGet("{id}")]
        public ActionResult<IEnumerable<MenuItemRm>> GetOrderItems(int id)
        {
            var menuItems = _entities.MenuItems
                .FromSqlRaw($"SELECT * FROM MenuItems WHERE Id IN (SELECT MenuItemID FROM OrderMenuItems WHERE OrderID = {id})");

            return Ok(menuItems);

        }

        [HttpGet("getnumber")]
        public ActionResult<IEnumerable<OrderMenuItemRm>> GetNumbersOfItems(int orderId)
        {
            var orderMenuItems = _entities.OrderMenuItems
                .FromSqlRaw($"Select * From OrderMenuItems Where OrderID = {orderId}");

            return Ok(orderMenuItems);
        }

        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(500)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult CancelOrder(int orderId)
        {
            var orderMenuItems = _entities.Database
                .ExecuteSqlRaw($"Delete from OrderMenuItems where OrderID = {orderId}");
            var order = _entities.Database
                .ExecuteSqlRaw($"Delete From Orders where Id = {orderId}");



            return Ok("Successfuly deleted order");
        }

        [HttpPut]
        [ProducesResponseType(500)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult UpdateOrder(int id, string clientName, string email, string adress, string status)
        {
            var order = _entities.Database
                .ExecuteSqlRaw($"Update Orders Set ClientName = '{clientName}', Email = '{email}', Adress = '{adress}', Status = '{status}'  Where Id = {id}");

            System.Diagnostics.Debug.WriteLine(id.ToString() + " " + clientName + " " + email + " " + adress);

            return Ok("Successfuly updated order");
        }

        [HttpGet("{id}/findOrder")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(OrderRm), 200)]
        public ActionResult<OrderRm> FindOrder(int id)
        {
            var order = _entities.Orders.FirstOrDefault(o => o.Id == id);
            if (order == null)
                return NotFound();

            var rm = new OrderRm(
                order.Id,
                order.TotalPrice,
                order.ClientName,
                order.Email,
                order.Adress,
                order.Status,
                order.Courier
                );

            return Ok(rm);
        }

        #endregion
    }
}
