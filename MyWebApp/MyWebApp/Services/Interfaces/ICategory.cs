using MyWebApp.Models;

namespace MyWebApp.Services.Interfaces
{
    public interface ICategory
    {
       Task <List<Category>> GetAllCategory();
    }
}
