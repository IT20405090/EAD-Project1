using Microsoft.AspNetCore.Mvc;
using TravelWebService.Model;
using TravelWebService.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TravelWebService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ScheduleController : ControllerBase
    {
        private readonly ScheduleService _sheduleService;

        public ScheduleController(ScheduleService scheduleService)
        {
            _sheduleService = scheduleService;
        }

        // GET: api/Schedule
        [HttpGet]
        public async Task<List<Shedule>> Get()
        {
            // Retrieve a list of schedules
            return await _sheduleService.GetAsync();
        }

        // GET: api/Schedule/{id}
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Shedule>> Get(string id)
        {
            // Retrieve a schedule by its unique identifier (id)
            var shedule = await _sheduleService.GetAsync(id);

            if (shedule is null)
            {
                // If the schedule is not found, return a 404 Not Found response
                return NotFound();
            }

            return shedule;
        }

        // POST: api/Schedule
        [HttpPost]
        public async Task<IActionResult> Post(Shedule schedule)
        {
            // Create a new schedule
            await _sheduleService.CreateAsync(schedule);

            // Return a 201 Created response with the new schedule in the response body
            return CreatedAtAction(nameof(Get), new { id = schedule.Id }, schedule);
        }

        // PUT: api/Schedule/{id}
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Shedule updatedSchedule)
        {
            // Retrieve an existing schedule by ID
            var shedule = await _sheduleService.GetAsync(id);

            if (shedule is null)
            {
                // If the schedule is not found, return a 404 Not Found response
                return NotFound();
            }

            // Update existing properties
            shedule.TrainId = updatedSchedule.TrainId;
            shedule.Start = updatedSchedule.Start;
            shedule.End = updatedSchedule.End;
            shedule.ArivingTime = updatedSchedule.ArivingTime;
            shedule.DepatureTime = updatedSchedule.DepatureTime;

            // Add or update the new properties
            shedule.Date = updatedSchedule.Date;
            shedule.StartingStation = updatedSchedule.StartingStation;
            shedule.Seats = updatedSchedule.Seats;
            shedule.Duration = updatedSchedule.Duration;
            shedule.TrainName = updatedSchedule.TrainName;
            shedule.EndingStation = updatedSchedule.EndingStation;
            shedule.Notices = updatedSchedule.Notices;

            // Update the schedule
            await _sheduleService.UpdateAsync(id, shedule);

            // Return a 204 No Content response
            return NoContent();
        }

        // DELETE: api/Schedule/{id}
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            // Retrieve a schedule by its unique identifier (id)
            var shedule = await _sheduleService.GetAsync(id);

            if (shedule is null)
            {
                // If the schedule is not found, return a 404 Not Found response
                return NotFound();
            }

            // Remove the schedule
            await _sheduleService.RemoveAsync(id);

            // Return a 204 No Content response
            return NoContent();
        }
    }
}
