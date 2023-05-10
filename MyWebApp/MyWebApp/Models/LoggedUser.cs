﻿using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel.DataAnnotations;

namespace MyWebApp.Models
{
    public class LoggedUser
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }
        public string PostalCode { get; set; }

        public string PhoneNumber { get; set; }

        public string Password { get; set; }
       
       
        List<Order> Orders { get; set; }
    }
}
