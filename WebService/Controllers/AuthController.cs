using Microsoft.AspNetCore.Mvc;
using TravelWebService.Model;
using TravelWebService.Services;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly UserService _userService;

    public AuthController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(Login loginModel)
    {
        var user = await _userService.GetByUsernameAsync(loginModel.Email);

        if (user == null || user.Password != loginModel.Password)
        {
            // Authentication failed
            return BadRequest(new { message = "Login Failed", isAuthenticated = false });
        }

        // Authentication succeeded
        return Ok(new { message = "Login Succeeded", isAuthenticated = true, user });
    }
}
