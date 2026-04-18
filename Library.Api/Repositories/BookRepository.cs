using System;
using Library.Api.Data;
using Library.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Library.Api.Repositories;

public class BookRepository:IBookRepository
{
    private readonly BookDbContext _context;

    public BookRepository(BookDbContext context)
    {
        _context = context;
    }
    
    public async Task<List<Book>> GetAllAsync()
    {
        return await _context.Books.ToListAsync();
    }

    public async Task<Book?> GetByIdAsync(int id)
    {
        return await _context.Books.FindAsync(id);
    }

    public async Task AddAsync(Book book)
    {
        _context.Books.Add(book);
    }

    public async Task SaveAsync()
    {
        await _context.SaveChangesAsync();
    }

}
