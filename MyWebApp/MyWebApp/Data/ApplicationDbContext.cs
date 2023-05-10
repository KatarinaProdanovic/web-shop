
using Microsoft.EntityFrameworkCore;
using MyWebApp.Models;
using System.Security.Cryptography;
using System.Text;

namespace MyWebApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Order> Orders { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Article> Article { get; set; }

        public DbSet<LoggedUser> LoggedUsers { get; set; }

        
        public string crypto(string password)
        {

            string passwordHash = BCrypt.Net.BCrypt.HashPassword(password);
            return passwordHash;
        }
        
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
           

       
          
            modelBuilder.Entity<LoggedUser>().HasData(new LoggedUser { Id = 1, Name = "Katarina", Surname = "Prodanovic", Email = "kaca@gmail.com", Address = "Ljub123", City = "Ljubovija", Country = "srbija", PostalCode = "123", PhoneNumber = "057758", Password =crypto("1234")});

            modelBuilder.Entity<LoggedUser>().HasData(new LoggedUser { Id = 2, Name = "Milica", Surname = "Markovic", Email = "mica@gmail.com", Address = "Ljub123", City = "Ljubovija", Country = "srbija", PostalCode = "123", PhoneNumber = "35346", Password = crypto("12345") });

            modelBuilder.Entity<LoggedUser>().HasData(new LoggedUser { Id = 3, Name = "Ana", Surname = "Jovanovic", Email = "ana@gmail.com", Address = "Ljub123", City = "Ljubovija", Country = "srbija", PostalCode = "123", PhoneNumber = "7544", Password = crypto("123456") });

            modelBuilder.Entity<User>().HasData(new User { Id = 3, Name = "Marija", Surname = "Prodanovic", Email = "kaca@gmail.com", Address = "Ljub123", City = "Ljubovija", Country = "srbija", PostalCode = "123", PhoneNumber = "057758"});


            modelBuilder.Entity<Order>().HasData(new Order { Id = 1, Quantity = 2, ProductCode = 123, OrderDate = DateTime.Now, UserId = 3, LoggedUserId = null }); ;

            modelBuilder.Entity<Category>().HasData(new Category { Id = 1, Name = "Kategorija1" });
            modelBuilder.Entity<Category>().HasData(new Category { Id = 2, Name = "Kategorija2" });
            modelBuilder.Entity<Category>().HasData(new Category { Id = 3, Name = "Kategorija3" });
            modelBuilder.Entity<Category>().HasData(new Category { Id = 4, Name = "Kategorija4" });

            modelBuilder.Entity<Article>().HasData(new Article { Id = 1, KataloskaOznaka = "123", NazivGrupe = "Artikal1", Stanje = 3, SifArtID = "11", Proizvodjac = "Neki1", Cena = 159, CategoryId = 1, Tezina = 125, BarCode = "12212", Kategorija="Kategorija1" });
            modelBuilder.Entity<Article>().HasData(new Article { Id = 2, KataloskaOznaka = "1234", NazivGrupe = "Artikal2", Stanje = 3, SifArtID = "22", Proizvodjac = "Neki2", Cena = 200, CategoryId = 2, Tezina = 100, BarCode = "45657", Kategorija = "Kategorija2" });
            modelBuilder.Entity<Article>().HasData(new Article { Id = 3, KataloskaOznaka = "12345", NazivGrupe = "Artikal3", Stanje = 3, SifArtID = "33", Proizvodjac = "Neki3", Cena = 250, CategoryId = 2, Tezina = 120, BarCode = "5765756", Kategorija = "Kategorija2" });

        }

    }
}
