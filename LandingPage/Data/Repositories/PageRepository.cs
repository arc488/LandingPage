using Landingly.Data.IRepositories;
using LandingPage.Data;
using LandingPage.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Landingly.Data.Repositories
{
    public class PageRepository : Repository<Page>, IPageRepository
    {
        public PageRepository(AppDbContext appDbContext) : base(appDbContext)
        {
        }
    }
}
