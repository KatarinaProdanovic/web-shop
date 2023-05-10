using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MyWebApp.Migrations
{
    /// <inheritdoc />
    public partial class NewArticles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Article_Category_CategoryId",
                table: "Article");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Article",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Kategorija",
                table: "Article",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Article",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Cena", "Kategorija", "NazivGrupe", "SifArtID" },
                values: new object[] { 159, "Kategorija1", "Artikal1", "Artikal 1" });

            migrationBuilder.InsertData(
                table: "Article",
                columns: new[] { "Id", "BarCode", "CategoryId", "Cena", "KataloskaOznaka", "Kategorija", "NazivGrupe", "Proizvodjac", "SifArtID", "Stanje", "Tezina" },
                values: new object[,]
                {
                    { 2, "45657", 2, 200, "1234", "Kategorija2", "Artikal2", "Neki2", "Artikal 2", 3, 100 },
                    { 3, "5765756", 2, 250, "12345", "Kategorija3", "Artikal3", "Neki3", "Artikal 3", 3, 120 }
                });

            migrationBuilder.UpdateData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "$2a$11$bmnJRz1p.k13gEkvqcpVFeuTDKCY0nXgNO4Pkny3QUS5adAwdMFgq");

            migrationBuilder.UpdateData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "$2a$11$ZqHKTcs7vZEs.F1RvWqxR.ZmyzKSueGPIH52MyoG9CnPIf2GE54P6");

            migrationBuilder.UpdateData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 3,
                column: "Password",
                value: "$2a$11$FNwoqqpsbXMj170aCbDTGe/TlP7VdKxNm1PekUQR8mhGhdaPQnod6");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "OrderDate",
                value: new DateTime(2023, 5, 4, 9, 23, 48, 41, DateTimeKind.Local).AddTicks(2849));

            migrationBuilder.AddForeignKey(
                name: "FK_Article_Category_CategoryId",
                table: "Article",
                column: "CategoryId",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Article_Category_CategoryId",
                table: "Article");

            migrationBuilder.DeleteData(
                table: "Article",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Article",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DropColumn(
                name: "Kategorija",
                table: "Article");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Article",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "Article",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Cena", "NazivGrupe", "SifArtID" },
                values: new object[] { 123, "Artikli1", "123" });

            migrationBuilder.UpdateData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "$2a$11$RtkLQQpxf5ROYd7YTKSUyexCiwGAO2UPFmD0VY6.RP5YQEtmMCETW");

            migrationBuilder.UpdateData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "$2a$11$6L1HM056iCq0MuTzRKe65.kTzFulbmD4iNVkzYF3EaWnvVeiv7m.C");

            migrationBuilder.UpdateData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 3,
                column: "Password",
                value: "$2a$11$Neacl29Zox.w3hSgpfdBu.aZ4b6yFxV3PLm1moe4JN/6ZQ0wDRjZq");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "OrderDate",
                value: new DateTime(2023, 5, 3, 14, 40, 55, 670, DateTimeKind.Local).AddTicks(9668));

            migrationBuilder.AddForeignKey(
                name: "FK_Article_Category_CategoryId",
                table: "Article",
                column: "CategoryId",
                principalTable: "Category",
                principalColumn: "Id");
        }
    }
}
