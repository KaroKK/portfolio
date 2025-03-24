using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Web.Models;

namespace Portfolio.Web.Controllers
{
    public class PortfolioController : Controller
    {
        public IActionResult Index()
        {
            var projekte = new List<Projekt>
            {
                new() {
                    Id = 1,
                    Titel = "Projekt 1",
                    Beschreibung = "Finanzverwaltung Web Anwendung",
                    Technologien = "C# .NET Core Web API, React+Vite, PostgreSQL",
                },
                new() {
                    Id = 2,
                     Beschreibung = "ERP Desktop Anwendung",
                    Technologien = ".NET, C#, Windows Forms, MySQL",
                },
                 new() {
                    Id = 3,
                    Titel = "Projekt 3",
                    Beschreibung = "NotizY - Web Anwendung",
                    Technologien = "PHP, HTML, CSS, Javascript, MySQL",
                },
                  new() {
                    Id = 4,
                    Titel = "Projekt 4",
                    Beschreibung = "Web-Forum",
                    Technologien = "PHP, HTML, CSS, MySQL",
                },
                 new() {
                    Id = 5,
                    Titel = "Projekt 5",
                    Beschreibung = "ERP Desktop Anwendung",
                    Technologien = ".NET, C#, WPF, MySQL",
                }
            };

            return View(projekte);
        }


    }
}

