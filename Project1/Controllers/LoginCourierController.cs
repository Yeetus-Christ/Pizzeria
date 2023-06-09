using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pizzeria.Data;
using Pizzeria.ReadModels;

namespace Pizzeria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginCourierController : ControllerBase
    {
        private readonly Entities _entities;

        public LoginCourierController(Entities entities)
        {
            _entities = entities;
        }

        [HttpGet("login")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(CourierRm), 200)]
        public ActionResult<CourierRm> Find(string name, string password)
        {
            var manager = _entities.Couriers.FirstOrDefault(c => c.Name == name && c.Password == password);
            if (manager == null)
                return NotFound();

            var rm = new CourierRm(
                manager.Id,
                manager.Name,
                manager.Password
                );

            return Ok(rm);
        }
    }
}
