using TravelWebService.Model;
using TravelWebService.Services;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Configure settings for UserDatabase from appsettings.json
builder.Services.Configure<UserDatabaseSettings>(
    builder.Configuration.GetSection("UserDatabase"));

// Register services with dependency injection
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<TrainService>();
builder.Services.AddSingleton<ScheduleService>();
builder.Services.AddSingleton<ReservationServices>();

// Add controllers to the application
builder.Services.AddControllers();

// Configure Swagger/OpenAPI documentation generation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Travel Web Service", Version = "v1" });
});

// Configure CORS (Cross-Origin Resource Sharing)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin() // Change this to your specific origin, e.g., builder.WithOrigins("http://localhost:3000")
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

// Use CORS to allow cross-origin requests
app.UseCors();

// Map controllers to handle HTTP requests
app.MapControllers();

app.Run();
