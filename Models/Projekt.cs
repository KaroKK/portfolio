namespace Portfolio.Web.Models
{
    public class Projekt
    {        
        public int Id { get; set; }

        public string Titel { get; set; } = string.Empty;

        public string Beschreibung { get; set; } = string.Empty;

        public string Technologien { get; set; } = string.Empty;
      
    }
}
