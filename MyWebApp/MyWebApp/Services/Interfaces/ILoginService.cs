using MyWebApp.Models;

namespace MyWebApp.Services.Interfaces
{
    public interface ILoginService
    {
        LoginData Login(LoginData data);
    }
}
