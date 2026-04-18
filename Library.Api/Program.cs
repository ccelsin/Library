using Library.Api.Repositories;
using Library.Api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IBookRepository, BookRepository>();
builder.Services.AddDbContext<BookDbContext>(options =>
    options.UseSqlite("Data Source=book.db"));
builder.Services.AddControllers();
var app = builder.Build();

app.MapControllers();
app.MigrateDatabase();
app.Run();
