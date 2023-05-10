using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace MyWebApp.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }
      
        public float Quantity { get; set; }

        public int ProductCode { get; set; }
        [ValidateNever]
        public DateTime OrderDate { get; set; }

        
        public Nullable<int> UserId { get; set; }
        [ForeignKey("UserId")]
        [ValidateNever]
        public User? User { get; set; }



        public Nullable<int> LoggedUserId { get; set; }
        [ForeignKey("LoggedUserId")]
        [ValidateNever]
        public LoggedUser? LoggedUser { get; set; }



    }
}
