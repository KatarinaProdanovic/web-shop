using MyWebApp.Models;

namespace MyWebApp.Services.Interfaces
{
    public interface IOrderService
    {
        Task<Order> AddOrderAsync(Order order);
        Task<Order> GetOrderByIdAsync(int id);
    }
}
