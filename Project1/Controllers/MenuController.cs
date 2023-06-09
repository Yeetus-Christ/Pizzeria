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
    public class MenuController : ControllerBase
    {
        #region Variables

        private readonly Entities _entities;
        private readonly ILogger<MenuController> _logger;

        public MenuController(ILogger<MenuController> logger, Entities entities)
        {
            _logger = logger;
            _entities = entities;
        }
        #endregion

        #region Requests

        [HttpGet("findMenuItems")]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(IEnumerable<MenuItemRm>), 200)]
        public IEnumerable<MenuItemRm> Search()
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

        [HttpGet("{type}/findMenuItemsByType")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(IEnumerable<MenuItemRm>), 200)]
        public ActionResult<IEnumerable<MenuItemRm>> SearchByType(string type)
        {
            var menuItems = _entities.MenuItems
                .Where(m => m.Type == type)
                .Select(m => new MenuItemRm(
                    m.Id,
                    m.Name,
                    m.Price,
                    m.Description,
                    m.Image,
                    type
                    ));
            return Ok(menuItems);
                
        }

        [HttpPost("createOrder")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public int CreateOrder()
        {
            var order = new Order(0);
            
            _entities.Orders.Add(order);
            _entities.SaveChanges();
            return order.Id;   
        }

        [HttpGet("{id}/findOrder")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(OrderRm), 200)]
        public ActionResult<OrderRm> Find(int id)
        {
            var order = _entities.Orders.FirstOrDefault(p => p.Id == id);
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

        [HttpPost("addItemToOrder")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult AddItemToOrder(int OrderId, int MenuItemId, int number)
        {
            var response = new OrderMenuItem();
            float currentPrice = 0;
            float finalPrice = 0;
            
            var menuItem = _entities.MenuItems.FirstOrDefault(mi => mi.Id == MenuItemId);
            var order = _entities.Orders.FirstOrDefault(o => o.Id == OrderId);

            currentPrice = order.TotalPrice;
            finalPrice = currentPrice + (menuItem.Price * number);

            _entities.Database
                .ExecuteSqlRaw($"Update Orders Set TotalPrice = {finalPrice} where Id = {OrderId}");

            var orderMenuItem = _entities.OrderMenuItems.
                FirstOrDefault(p => p.OrderID == OrderId && p.MenuItemID == MenuItemId);

            if (orderMenuItem != null)
            {
                _entities.OrderMenuItems.Remove(orderMenuItem);
                _entities.SaveChanges();
                response = new OrderMenuItem(orderMenuItem.OrderID, orderMenuItem.MenuItemID, orderMenuItem.Number + number);
            }
            else
            {
                response = new OrderMenuItem(OrderId, MenuItemId, number);
            }
            

            
            _entities.OrderMenuItems.Add(response);
            _entities.SaveChanges();
            return Ok(response);
        }

        #endregion
    }
}
