using Microsoft.AspNetCore.Mvc;
using TravelWebService.Model;
using TravelWebService.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TravelWebService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TrainController : ControllerBase
    {
        private readonly TrainService _TrainService;

        public TrainController(TrainService TrainService) =>
            _TrainService = TrainService;

        // GET: api/Train
        [HttpGet]
        public async Task<List<train>> Get()
        {
            // Retrieve a list of trains
            return await _TrainService.GetAsync();
        }

        // GET: api/Train/{id}
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<train>> Get(string id)
        {
            // Retrieve a train by its unique identifier (id)
            var train = await _TrainService.GetAsync(id);

            if (train is null)
            {
                // If the train is not found, return a 404 Not Found response
                return NotFound();
            }

            return train;
        }

        // POST: api/Train
        [HttpPost]
        public async Task<IActionResult> Post(train newTrain)
        {
            // Create a new train
            await _TrainService.CreateAsync(newTrain);

            // Return a 201 Created response with the new train in the response body
            return CreatedAtAction(nameof(Get), new { id = newTrain.Id }, newTrain);
        }

        // PUT: api/Train/{id}
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, train updatedTrain)
        {
            // Retrieve an existing train by ID
            var train = await _TrainService.GetAsync(id);

            if (train is null)
            {
                // If the train is not found, return a 404 Not Found response
                return NotFound();
            }

            // Update the ID to match the existing train's ID
            updatedTrain.Id = train.Id;

            // Update the train
            await _TrainService.UpdateAsync(id, updatedTrain);

            // Return a 204 No Content response
            return NoContent();
        }

        // DELETE: api/Train/{id}
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            // Retrieve a train by its unique identifier (id)
            var train = await _TrainService.GetAsync(id);

            if (train is null)
            {
                // If the train is not found, return a 404 Not Found response
                return NotFound();
            }

            // Remove the train
            await _TrainService.RemoveAsync(id);

            // Return a 204 No Content response
            return NoContent();
        }
    }
}
