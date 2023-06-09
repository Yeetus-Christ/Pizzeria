using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pizzeria.Data;
using Pizzeria.ReadModels;

namespace Pizzeria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginManagerController : ControllerBase
    {
        private readonly Entities _entities;

        public LoginManagerController(Entities entities)
        {
            _entities = entities;
        }

        [HttpGet("login")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(ManagerRm), 200)]
        public ActionResult<ManagerRm> Find(string name, string password)
        {
            var manager = _entities.Manager.FirstOrDefault(m => m.Name == name && m.Password == password);
            if (manager == null)
                return NotFound();

            var rm = new ManagerRm(
                manager.Id,
                manager.Name,
                manager.Password
                );

            return Ok(rm);
        }
    }
}
