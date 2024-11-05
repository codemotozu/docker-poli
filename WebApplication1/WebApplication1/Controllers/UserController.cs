using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private List<User> _user = new List<User> 
        { 
            new User { Id="1", Apellidos="AA", Nombre="AA" },
            new User { Id="2", Apellidos="BB", Nombre="BB" },
            new User { Id="3", Apellidos="CC", Nombre="CC" },
            new User { Id="4", Apellidos="DD", Nombre="DD" },
            new User { Id="5", Apellidos="EE", Nombre="EE" },
            new User { Id="6", Apellidos="FF", Nombre="FF" },
            new User { Id="7", Apellidos="GG", Nombre="GG" },
            new User { Id="8", Apellidos="HH", Nombre="HH" },
            new User { Id="9", Apellidos="II", Nombre="II" },
        };


        [HttpGet]
        public IActionResult Index()
        {
            return Ok(_user);
        }
    }
}
