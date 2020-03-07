using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Landingly.Data.IRepositories;
using LandingPage.Models;
using LandingPage.ViewModels.LandingPage;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Landingly.Controllers
{
    public class PageController : Controller
    {
        private readonly IPageRepository pageRepository;
        private readonly IMapper mapper;

        public PageController(IPageRepository pageRepository, IMapper mapper)
        {
            this.pageRepository = pageRepository;
            this.mapper = mapper;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create(CreateViewModel viewModel, IFormFile logoImage)
        {
            var page = this.mapper.Map<CreateViewModel, Page>(viewModel);

            using (var ms = new MemoryStream())
            {
                logoImage.CopyTo(ms);
                page.Logo = ms.ToArray();
            };

            this.pageRepository.Add(page);

            return View();
        }

        public IActionResult Detail(int id)
        {
            var page = this.pageRepository.GetById(id);
            var viewModel = this.mapper.Map<Page, DetailViewModel>(page);
            return View(viewModel);
        }
    }
}