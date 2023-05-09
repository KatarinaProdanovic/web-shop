using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyWebApp.Migrations
{
    /// <inheritdoc />
    public partial class NewData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Article",
                keyColumn: "Id",
                keyValue: 1,
                column: "SifArtID",
                value: "11");

            migrationBuilder.UpdateData(
                table: "Article",
                keyColumn: "Id",
                keyValue: 2,
                column: "SifArtID",
                value: "22");

            migrationBuilder.UpdateData(
                table: "Article",
                keyColumn: "Id",
                keyValue: 3,
                column: "SifArtID",
                value: "33");

            migrationBuilder.UpdateData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "$2a$11$ffMnb/02.yMXJz/aAMqy0eSnmu.mNtZClp4YGllDRcF33QmnlviQu");

            migrationBuilder.UpdateData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 2,
                column: "Password",
                value: "$2a$11$f3QKYX9PhYpe4cN/KsKRXur3EF5u.5m02FizJ5n1wj2L8uBEDJHhG");

            migrationBuilder.UpdateData(
                table: "LoggedUsers",
                keyColumn: "Id",
                keyValue: 3,
                column: "Password",
                value: "$2a$11$AuWMDt3LC0Sj1CJkmwP9d.pkGfDPFcE3BI1tae.li7g0BPyleo6N2");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "OrderDate",
                value: new DateTime(2023, 5, 4, 9, 52, 55, 834, DateTimeKind.Local).AddTicks(7913));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Article",
                keyColumn: "Id",
                keyValue: 1,
                column: "SifArtID",
                value: "Artikal 1");

            migrationBuilder.UpdateData(
                table: "Article",
                keyColumn: "Id",
                keyValue: 2,
                column: "SifArtID",
                value: "Artikal 2");

            migrationBuilder.UpdateData(
                table: "Article",
                keyColumn: "Id",
                keyValue: 3,
                column: "SifArtID",
                value: "Artikal 3");

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
    }
}
