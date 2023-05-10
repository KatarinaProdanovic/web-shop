using Microsoft.EntityFrameworkCore;
using MyWebApp.Data;
using MyWebApp.Models;
using MyWebApp.Services.Interfaces;

namespace MyWebApp.Services
{
    public class OrderService : IOrderService
    {

        private readonly ApplicationDbContext _dbContext;
        public OrderService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Order> AddOrderAsync(Order order)
        {
           await _dbContext.Orders.AddAsync(order);
             _dbContext.SaveChanges();
            return order;
        }
        public async Task<Order> GetOrderByIdAsync(int id)
        {
            return await _dbContext.Orders.FindAsync(id);
        }

    }
}
