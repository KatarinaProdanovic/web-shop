using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyWebApp.Migrations
{
    /// <inheritdoc />
    public partial class NewArticles1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Article",
                keyColumn: "Id",
                keyValue: 3,
                column: "Kategorija",
                value: "Kategorija2");

            migrationBuilder.UpdateData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "$2a$11$EctNZrKXbHIgpDsKDcOeo.XJe/CGptQJmwHdBmi/rZq99BCoeXtPu");

            migrationBuilder.UpdateData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "$2a$11$OytLne85S/cBRyhs6/ga1.ZbLGNIv3KHX7oIQrbZG7vqlgqBlaVle");

            migrationBuilder.UpdateData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 3,
                column: "Password",
                value: "$2a$11$S9hA7qein6WjSEDuPumh1OPe1VdCnzMWdlb4.s0MWd0Ob4pGIrHWq");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "OrderDate",
                value: new DateTime(2023, 5, 4, 9, 34, 7, 451, DateTimeKind.Local).AddTicks(2613));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Article",
                keyColumn: "Id",
                keyValue: 3,
                column: "Kategorija",
                value: "Kategorija3");

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
        }
    }
}
