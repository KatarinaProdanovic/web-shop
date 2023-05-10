using Microsoft.AspNetCore.Mvc;
using MyWebApp.Models;
using MyWebApp.Services;
using MyWebApp.Services.Interfaces;

namespace MyWebApp.Controllers
{
    [Route("api/categories")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategory _categoryService;
        public CategoryController(ICategory categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet("allCategories")]
        public async Task<List<Category>> AllCategories()
        {

            try

            {
                return await _categoryService.GetAllCategory();
            }
            catch (Exception ex)
            {
                // Vratite grešku ukoliko je došlo do problema
                // return Ok();
                return null;
            }
        }

    }
}
