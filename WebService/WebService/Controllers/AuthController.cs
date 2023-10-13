using Microsoft.AspNetCore.Mvc;
using TravelWebService.Model;
using TravelWebService.Services;

// Define an API controller that handles authentication related endpoints
[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly UserService _userService;

    // Constructor to inject the UserService into the controller
    public AuthController(UserService userService)
    {
        _userService = userService;
    }

    // Define an HTTP POST endpoint for user login
    [HttpPost("login")]
    public async Task<IActionResult> Login(Login loginModel)
    {
        // Attempt to retrieve a user by their username (email)
        var user = await _userService.GetByUsernameAsync(loginModel.Email);

        if (user == null || user.Password != loginModel.Password)
        {
            // If the user is not found or the password does not match, return a BadRequest response
            // to indicate authentication failure
            return BadRequest(new { message = "Login Failed", isAuthenticated = false });
        }

        // If the user is found and the password matches, return an Ok response
        // to indicate successful authentication, along with user information
        return Ok(new { message = "Login Succeeded", isAuthenticated = true, user });
    }
}
