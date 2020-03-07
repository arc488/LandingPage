using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LandingPage.Models
{
    public class Page
    {
        [Key]
        public int LandingPageId { get; set; }
        public byte[] Logo { get; set; }
        public string CompanyName { get; set; }
        public string LandingPageURL { get; set; }

    }
}
