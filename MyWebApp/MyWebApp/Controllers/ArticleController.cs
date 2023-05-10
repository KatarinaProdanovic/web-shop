using Microsoft.AspNetCore.Mvc;
using MyWebApp.Models;
using MyWebApp.Services.Interfaces;

namespace MyWebApp.Controllers
{
    [Route("api/articles")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IArticle _articleService;
        public ArticleController(IArticle articleService)
        {
            _articleService = articleService;
        }

        [HttpGet("allArticles")]
        public async Task<List<Article>> AllCategories()
        {

            try

            {
                return await _articleService.GetAllArticle();
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
