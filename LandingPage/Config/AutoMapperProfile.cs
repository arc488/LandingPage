using AutoMapper;
using LandingPage.Models;
using LandingPage.ViewModels.LandingPage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Landingly.Config
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Page, CreateViewModel>().ReverseMap();
            CreateMap<Page, DetailViewModel>().ReverseMap();
        }

    }
}
