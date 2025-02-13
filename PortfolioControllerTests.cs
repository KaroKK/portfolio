using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Web.Controllers;
using Portfolio.Web.Models;
using Xunit;

namespace Portfolio.Tests
{ 
    public class PortfolioControllerTest
    { 
        [Fact]
        public void Index_GibtViewMitProjektenZurueck()
        {
             var controller = new PortfolioController();

             var result = controller.Index();

            // Assert: Überprüfen, ob ein ViewResult zurückgegeben wurde
            var viewResult = Assert.IsType<ViewResult>(result);
            var projekte = Assert.IsAssignableFrom<IEnumerable<Projekt>>(viewResult.ViewData.Model);
            Assert.NotEmpty(projekte);
        }
    }
}
