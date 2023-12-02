using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class DBContext : DbContext
    {

        public DBContext(DbContextOptions options) :base(options)
        {
            
        }

        public DbSet<Book> Books { get; set; }
    }
}
