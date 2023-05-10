using Microsoft.EntityFrameworkCore;
using MyWebApp.Data;
using MyWebApp.Models;
using MyWebApp.Services.Interfaces;

namespace MyWebApp.Services
{
    public class ArticleService: IArticle
    {
        private readonly ApplicationDbContext _dbContext;
        public ArticleService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Article>> GetAllArticle()//vraca listu svih kategorija
        {
            return await _dbContext.Article.ToListAsync();
        }
    }
}
