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
                    Beschreibung = "ERP Desktop Anwendung",
                    Technologien = ".NET, C#, WPF, MySQL",
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
            };

            return View(projekte);
        }
        public IActionResult SendMessage(string name, string email, string message)
        {
            if (string.IsNullOrWhiteSpace(name) ||
                string.IsNullOrWhiteSpace(email) ||
                string.IsNullOrWhiteSpace(message))
            {
                return BadRequest("Alles ausfüllen.");
            }


            return Json(new { success = true, responseText = "Danke für Ihre Nachricht!" });
        }

    }

}

