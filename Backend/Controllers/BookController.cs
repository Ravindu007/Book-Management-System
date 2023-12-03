using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {

        private readonly DBContext _dbcontext;

        public BookController(DBContext dbcontext)
        {
            _dbcontext = dbcontext;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllBooks()
        {
            var books = await _dbcontext.Books.ToListAsync();
            return Ok(books);
        }


        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetBook([FromRoute]Guid id)
        {
            var book = await _dbcontext.Books.FirstOrDefaultAsync(x => x.Id == id);
            if(book == null)
            {
                return NotFound();
            }

            return Ok(book);

        }


        [HttpPost]
        public async Task<IActionResult> CreateBook([FromBody]Book book)
        {
            book.Id = Guid.NewGuid();
            await _dbcontext.Books.AddAsync(book);
            await _dbcontext.SaveChangesAsync();

            return Ok(book);
        }


        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateBook([FromRoute] Guid id, Book updatedBook)
        {
            var book = await _dbcontext.Books.FindAsync(id);
            if(book == null)
            {
                return NotFound();
            }

            book.Name = updatedBook.Name;
            book.Author = updatedBook.Author;
            book.DatePublished = updatedBook.DatePublished;
            book.Category = updatedBook.Category;

            await _dbcontext.SaveChangesAsync();
            return Ok(book);

        }
    }
}
