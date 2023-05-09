using Microsoft.AspNetCore.Mvc;
using MyWebApp.Models;
using MyWebApp.Services.Interfaces;

namespace MyWebApp.Controllers
{
    [Route("api/login")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost("loginUser")]
        public async Task<IActionResult> LoginUser([FromBody] LoginData jsonData)
        {

            try
            {

                return Ok(_loginService.Login(jsonData));
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
