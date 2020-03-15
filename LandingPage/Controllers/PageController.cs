using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using AutoMapper;
using Landingly.Data.IRepositories;
using Landingly.Services;
using LandingPage.Models;
using LandingPage.ViewModels.LandingPage;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Landingly.Controllers
{
    public class PageController : Controller
    {
        private readonly IPageRepository pageRepository;
        private readonly VideoUploadService uploadService;
        private readonly IMapper mapper;

        public PageController(IPageRepository pageRepository, VideoUploadService uploadService, IMapper mapper)
        {
            this.pageRepository = pageRepository;
            this.uploadService = uploadService;
            this.mapper = mapper;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create()
        {
            var viewModel = new CreateViewModel();
            return View(viewModel);
        }

        [HttpPost]
        public IActionResult Create(CreateViewModel viewModel, IFormFile file)
        {
            var page = this.mapper.Map<CreateViewModel, Page>(viewModel);

            using (var ms = new MemoryStream())
            {
                file.CopyTo(ms);
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

        [HttpGet("/page/upload")]
        public IActionResult Upload()
        {
            return View();
        }

        [HttpPost("/page/upload")]
        public IActionResult UploadVideo()
        {
            //filename is current time stripped of all non numbers
            var fileName = Regex.Replace(DateTime.Now.ToString(), "[^0-9]", "") + ".webm";

            var file = Request.Form.Files[0];
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\videos", fileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(stream);

            }
            UploadToYoutube(fileName);
            return View("Upload");
        }

        public void UploadToYoutube(string fileName)
        {
            this.uploadService.Run(fileName).Wait();
            
        }

    }
}
