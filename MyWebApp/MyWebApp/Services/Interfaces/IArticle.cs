using MyWebApp.Models;

namespace MyWebApp.Services.Interfaces
{
    public interface IArticle
    {
        Task<List<Article>> GetAllArticle();

    }
}
