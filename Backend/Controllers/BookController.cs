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


        [HttpPost]
        public async Task<IActionResult> CreateBook([FromBody]Book book)
        {
            book.Id = Guid.NewGuid();
            await _dbcontext.Books.AddAsync(book);
            await _dbcontext.SaveChangesAsync();

            return Ok(book);
        }
    }
}
