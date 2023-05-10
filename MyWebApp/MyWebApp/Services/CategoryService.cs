using Microsoft.EntityFrameworkCore;
using MyWebApp.Data;
using MyWebApp.Models;
using MyWebApp.Services.Interfaces;

namespace MyWebApp.Services
{
    public class CategoryService : ICategory
    {


        private readonly ApplicationDbContext _dbContext;
        public CategoryService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Category>> GetAllCategory()//vraca listu svih kategorija
        {
            return await _dbContext.Category.ToListAsync();
        }
    }
}
