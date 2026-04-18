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
        await _context.SaveChangesAsync();
    }

    public async Task<Book?> UpdateAsync(int id, Book newBook)
    {
        Book? book = await _context.Books.FindAsync(id);
        if(book != null)
        {
            book.Title = newBook.Title;
            book.Author = newBook.Author;
            book.ReleaseDate = newBook.ReleaseDate;
            _context.Books.Update(book);
            await _context.SaveChangesAsync();
            
        }
        return book;
        
    }

    public async Task DeleteAsync(int id)
    {
        Book? book = await _context.Books.FindAsync(id);
        if(book != null)
        {
            _context.Books.Remove(book);
            await _context.SaveChangesAsync();
        }
    }

}
