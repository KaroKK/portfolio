using System.Globalization;
using Microsoft.AspNetCore.Localization;

var builder = WebApplication.CreateBuilder(args);

// Füge MVC-Dienste hinzu
builder.Services.AddControllersWithViews();

// Füge Lokalisierungsdienste hinzu, wobei Ressourcen im Ordner "Resources" liegen
builder.Services.AddLocalization(options => options.ResourcesPath = "Resources");

var app = builder.Build();

// Fehlerbehandlung und Sicherheitskonfiguration
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Fehler/Index");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

// Konfiguration der unterstützten Kulturen (z.B. Deutsch und Englisch)
var supportedCultures = new List<CultureInfo>
{
    new CultureInfo("de-DE"),
    new CultureInfo("en-US")
};

app.UseRequestLocalization(new RequestLocalizationOptions
{
    DefaultRequestCulture = new RequestCulture("de-DE"),
    SupportedCultures = supportedCultures,
    SupportedUICultures = supportedCultures
});

// Definieren der Standardroute
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Portfolio}/{action=Index}/{id?}");

app.Run();
