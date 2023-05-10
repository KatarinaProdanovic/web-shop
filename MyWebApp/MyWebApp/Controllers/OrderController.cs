using Microsoft.AspNetCore.Mvc;
using MyWebApp.Models;
using MyWebApp.Services.Interfaces;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MyWebApp.Controllers
{

    [Route("api/orders")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost("addOrder")]
        public async Task<IActionResult> AddOrder([FromBody] Order jsonOrder)
        {
          
            try

            {
               
                Order o = new Order();

                o = jsonOrder;
                o.OrderDate = DateTime.Now;
                
               
                return Ok(_orderService.AddOrderAsync(o));
            }
            catch (Exception ex)
            {
                // Vratite grešku ukoliko je došlo do problema
               // return Ok();
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrder(int id)
        {
            try
            {
                // Pronađite proizvod sa zadatim ID-jem
                var order = await _orderService.GetOrderByIdAsync(id);

                if (order == null)
                {
                    return NotFound();
                }

                // Kreirajte novi JSON objekat za proizvod i vratite ga kao odgovor
                var jsonOrder = JsonConvert.SerializeObject(order);
                return Ok(jsonOrder);
            }
            catch (Exception ex)
            {
                // Vratite grešku ukoliko je došlo do problema
                return BadRequest(ex.Message);
            }
        }
       






    }

}
