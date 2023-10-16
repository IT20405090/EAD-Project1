using Microsoft.AspNetCore.Mvc;
using TravelWebService.Model;
using TravelWebService.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TravelWebService.Controller
{
    [ApiController]
    [Route("api/User")]
    public class UserController : ControllerBase
    {
        private readonly UserService _usersService;

        public UserController(UserService usersService) =>
            _usersService = usersService;

        // GET: api/User
        [HttpGet]
        public async Task<List<User>> Get()
        {
            // Retrieve a list of users
            return await _usersService.GetAsync();
        }

        // GET: api/User/{id}
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<User>> Get(string id)
        {
            // Retrieve a user by their unique identifier (id)
            var user = await _usersService.GetAsync(id);

            if (user is null)
            {
                // If the user is not found, return a 404 Not Found response
                return NotFound();
            }

            return user;
        }

        // POST: api/User
        [HttpPost]
        public async Task<IActionResult> Post(User newUser)
        {
            // Create a new user
            await _usersService.CreateAsync(newUser);

            // Return a 201 Created response with the new user in the response body
            return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
        }

        // PUT: api/User/{id}
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, User updatedUser)
        {
            // Retrieve an existing user by ID
            var user = await _usersService.GetAsync(id);

            if (user is null)
            {
                // If the user is not found, return a 404 Not Found response
                return NotFound();
            }

            // Update the ID to match the existing user's ID
            updatedUser.Id = user.Id;

            // Update the user
            await _usersService.UpdateAsync(id, updatedUser);

            // Return a 204 No Content response
            return NoContent();
        }

        // DELETE: api/User/{id}
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            // Retrieve a user by their unique identifier (id)
            var user = await _usersService.GetAsync(id);

            if (user is null)
            {
                // If the user is not found, return a 404 Not Found response
                return NotFound();
            }

            // Remove the user
            await _usersService.RemoveAsync(id);

            // Return a 204 No Content response
            return NoContent();
        }
    }
}
