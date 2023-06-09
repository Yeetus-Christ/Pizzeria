using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pizzeria.Data;
using Pizzeria.ReadModels;

namespace Pizzeria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginChefController : ControllerBase
    {
        private readonly Entities _entities;

        public LoginChefController(Entities entities)
        {
            _entities = entities;
        }

        [HttpGet("login")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(ChefRm), 200)]
        public ActionResult<ChefRm> Find(string name, string password)
        {
            var manager = _entities.Chefs.FirstOrDefault(c => c.Name == name && c.Password == password);
            if (manager == null)
                return NotFound();

            var rm = new ChefRm(
                manager.Id,
                manager.Name,
                manager.Password
                );

            return Ok(rm);
        }
    }
}
