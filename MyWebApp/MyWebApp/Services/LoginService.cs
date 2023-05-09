using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MyWebApp.Data;
using MyWebApp.Models;
using MyWebApp.Services.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MyWebApp.Services
{
    public class LoginService : ILoginService
    {

        private readonly IConfigurationSection _secretKey;
        private readonly ApplicationDbContext _dbContext;

        public LoginService(IConfiguration config, ApplicationDbContext dbContext)
        {
            _secretKey = config.GetSection("SecretKey");
            _dbContext = dbContext;
        }
        public  LoginData Login(LoginData data)
        {
            List<LoggedUser> users = new List<LoggedUser>();

            users =  _dbContext.LoggedUsers.ToList();
            if(users.Count == 0)
            {
                return null;
            }
            LoggedUser user = users.First(x => x.Email == data.Email);

            if (user == null)

                return null;

            if (BCrypt.Net.BCrypt.Verify(data.Password, user.Password))//Uporedjujemo hes pasvorda iz baze i unetog pasvorda
            {
               
                
                SymmetricSecurityKey secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secretKey.Value));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var tokeOptions = new JwtSecurityToken(
                    issuer: "'https://localhost:7157", //url servera koji je izdao token
                    //claims: claims, //claimovi
                    expires: DateTime.Now.AddMinutes(20), //vazenje tokena u minutama
                    signingCredentials: signinCredentials //kredencijali za potpis
                );
                string tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                LoginData d = new LoginData();
                d = data;
                d.Token = tokenString;
                d.Id = user.Id;
                return d;
            }
            else
            {
                return null;
            }
        }

    }
}
