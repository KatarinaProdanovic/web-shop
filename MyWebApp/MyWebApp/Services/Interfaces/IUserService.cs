using MyWebApp.Models;

namespace MyWebApp.Services.Interfaces
{
    public interface IUserService
    {
        Task<User> AddUserAsync(User user);
        Task<User> GetUserByIdAsync(int id);
    }
}
