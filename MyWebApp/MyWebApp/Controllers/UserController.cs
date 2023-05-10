using Microsoft.AspNetCore.Mvc;
using MyWebApp.Models;
using MyWebApp.Services.Interfaces;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using static System.Runtime.InteropServices.JavaScript.JSType;


namespace MyWebApp.Controllers
{
   
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("addUser")]
        public async Task<IActionResult> AddUser([FromBody] User jsonUser)
        {
          
            try
            {
              
                return Ok(_userService.AddUserAsync(jsonUser));
            }
            catch (Exception ex)
            {
               
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            try
            {
                
                var user = await _userService.GetUserByIdAsync(id);

                if (user == null)
                {
                    return NotFound();
                }

                var jsonUser = JsonConvert.SerializeObject(user);
                return Ok(jsonUser);
            }
            catch (Exception ex)
            {
               
                return BadRequest(ex.Message);
            }
        }
       






    }
    }

