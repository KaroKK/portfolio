using Microsoft.AspNetCore.Mvc;
using Portfolio.Web.Models;
using System.Collections.Generic;

namespace Portfolio.Web.Controllers
{
    public class PortfolioController : Controller
    {
        public IActionResult Index()
        {
            var projekte = new List<Projekt>
            {
                new Projekt
                {
                    Id = 1,
                    Titel = "Projekt 1",
                    Beschreibung = "Beschreibung von Projekt 1",
                    Technologien = "C#, WPF, MySQL",
                },
                new() {
                    Id = 2,
                    Titel = "Projekt 2",
                    Beschreibung = "Beschreibung von Projekt 2",
                    Technologien = "aaa, bbb, ccc",
                },
                 new() {
                    Id = 3,
                    Titel = "Projekt 3",
                    Beschreibung = "Beschreibung von Projekt 1",
                    Technologien = "C#, WPF, MySQL",
                },
                  new() {
                    Id = 4,
                    Titel = "Projekt 4",
                    Beschreibung = "Beschreibung von Projekt 1",
                    Technologien = "C#, WPF, MySQL",
                },
            };

            return View(projekte);
        }
    }
}
