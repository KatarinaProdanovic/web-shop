using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MyWebApp.Migrations
{
    /// <inheritdoc />
    public partial class AddDataInTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "LoggedUsers",
                columns: new[] { "Id", "Address", "City", "Country", "Email", "Name", "Password", "PhoneNumber", "PostalCode", "Surname" },
                values: new object[,]
                {
                    { 1, "Ljub123", "Ljubovija", "srbija", "kaca@gmail.com", "Katarina", "$2a$11$jWDGVlVdTmjsMGTzr3lEMeTSi6rRDvmZtLPwx2JhSs4LWOFa1Wt6W", "057758", "123", "Prodanovic" },
                    { 2, "Ljub123", "Ljubovija", "srbija", "mica@gmail.com", "Milica", "$2a$11$hFep6heyvRgR9S6XWHVly.AO8g9Y0.BBjZ5nEiz7GlrA7EuE5uAn2", "35346", "123", "Markovic" },
                    { 3, "Ljub123", "Ljubovija", "srbija", "ana@gmail.com", "Ana", "$2a$11$U1KYz.AnLsc32lk3GOGxCuI4KrhXLg9eSdZZ8CBSJ6b89VRTkWSqe", "7544", "123", "Jovanovic" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Address", "City", "Country", "Email", "Name", "PhoneNumber", "PostalCode", "Surname" },
                values: new object[] { 3, "Ljub123", "Ljubovija", "srbija", "kaca@gmail.com", "Marija", "057758", "123", "Prodanovic" });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "LoggedUserId", "OrderDate", "ProductCode", "Quantity", "UserId" },
                values: new object[] { 1, null, new DateTime(2023, 4, 21, 14, 9, 58, 962, DateTimeKind.Local).AddTicks(6005), 123, 2f, 3 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
