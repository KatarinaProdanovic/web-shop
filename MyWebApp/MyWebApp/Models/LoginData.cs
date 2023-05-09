using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace MyWebApp.Models
{
    public class LoginData
    {
        public string Email { get; set; }
        public string Password { get; set; }
        [ValidateNever]
        public string Token { get; set; }

        [ValidateNever]
        public int Id { get; set; }

    }
}
