using System;
using Microsoft.EntityFrameworkCore;

namespace Library.Api.Data;

public static class DataExtensions
{
    public static void MigrateDatabase(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<BookDbContext>();
        dbContext.Database.Migrate();
    }
}
