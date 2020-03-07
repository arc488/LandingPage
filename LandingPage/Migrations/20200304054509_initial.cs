using Microsoft.EntityFrameworkCore.Migrations;

namespace LandingPage.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LandingPages",
                columns: table => new
                {
                    LandingPageId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Logo = table.Column<string>(nullable: true),
                    CompanyName = table.Column<string>(nullable: true),
                    LandingPageURL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LandingPages", x => x.LandingPageId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LandingPages");
        }
    }
}
