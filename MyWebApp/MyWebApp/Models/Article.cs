using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyWebApp.Models
{
    public class Article
    {

        [Key]
        public int Id { get; set; }
        public string KataloskaOznaka { get; set; }

        public string NazivGrupe { get; set; }
        public int Stanje { get; set; }
        public string SifArtID { get; set; }
        public string Proizvodjac { get; set; }
      
        public int Cena { get; set; }
        public int Tezina { get; set; }
        public string BarCode { get; set; }

        public string Kategorija { get; set; }
       
        public Nullable<int> CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        [ValidateNever]


        public Category Category { get; set; }
    }
}
