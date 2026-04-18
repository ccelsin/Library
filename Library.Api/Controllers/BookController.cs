using Library.Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Library.Api.Repositories;

namespace Library.Api.Controllers
{
    [Route("api/book")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookRepository _repository;
        public BookController(IBookRepository repository)
        {
            _repository = repository;
        }
        public async Task<ActionResult<List<Book>>> GetAll()
        {
            var books = await _repository.GetAllAsync();
            return Ok(books);
        }
    }
}
