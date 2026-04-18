using System;
using Library.Api.Models;

namespace Library.Api.Repositories;

public interface IBookRepository
{
    Task<List<Book>> GetAllAsync();

}
