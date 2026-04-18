using System;
using Library.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Library.Api.Data;

public class BookDbContext(DbContextOptions<BookDbContext> options): DbContext(options)
{
    public DbSet<Book> Books {get; set;}

}
