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

        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetAll()
        {
            var books = await _repository.GetAllAsync();
            return Ok(books);
        }

        [HttpPost]
        public async Task<ActionResult> Add(Book book)
        {
            await _repository.AddAsync(book);
            return Ok(book);
        }

        [HttpGet("{id}")]
        public async Task <ActionResult> GetBook(int id)
        {
            Book? book = await  _repository.GetByIdAsync(id);
            return Ok(book);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Book>> Update(int id, Book bookValue)
        {
            return Ok(await _repository.UpdateAsync(id, bookValue));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _repository.DeleteAsync(id);
            return Ok();
        }
    }
}
