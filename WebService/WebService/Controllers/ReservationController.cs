using Microsoft.AspNetCore.Mvc;
using TravelWebService.Model;
using TravelWebService.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TravelWebService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReservationController : ControllerBase
    {
        private readonly ReservationServices _usersService;

        public ReservationController(ReservationServices reservationServices) =>
            _usersService = reservationServices;

        // GET: api/Reservation
        [HttpGet]
        public async Task<List<Reservations>> Get()
        {
            // Get a list of reservations
            return await _usersService.GetAsync();
        }

        // GET: api/Reservation/{id}
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Reservations>> Get(string id)
        {
            // Retrieve a reservation by its unique identifier (id)
            var reservation = await _usersService.GetAsync(id);

            if (reservation is null)
            {
                // If the reservation is not found, return a 404 Not Found response
                return NotFound();
            }

            return reservation;
        }

        // POST: api/Reservation
        [HttpPost]
        public async Task<IActionResult> Post(Reservations newReservation)
        {
            // Create a new reservation
            await _usersService.CreateAsync(newReservation);

            // Return a 201 Created response with the new reservation in the response body
            return CreatedAtAction(nameof(Get), new { id = newReservation.Id }, newReservation);
        }

        // PUT: api/Reservation/{id}
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Reservations updatedReservation)
        {
            // Retrieve an existing reservation by ID
            var reservation = await _usersService.GetAsync(id);

            if (reservation is null)
            {
                // If the reservation is not found, return a 404 Not Found response
                return NotFound();
            }

            // Update existing properties
            reservation.Traveler = updatedReservation.Traveler;
            reservation.Train = updatedReservation.Train;
            reservation.Date = updatedReservation.Date;
            reservation.ArivingTime = updatedReservation.ArivingTime;

            // Add or update the new properties
            reservation.StartingPoint = updatedReservation.StartingPoint;
            reservation.EndingPoint = updatedReservation.EndingPoint;

            // Update the reservation
            await _usersService.UpdateAsync(id, reservation);

            // Return a 204 No Content response
            return NoContent();
        }

        // DELETE: api/Reservation/{id}
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            // Retrieve a reservation by its unique identifier (id)
            var reservation = await _usersService.GetAsync(id);

            if (reservation is null)
            {
                // If the reservation is not found, return a 404 Not Found response
                return NotFound();
            }

            // Remove the reservation
            await _usersService.RemoveAsync(id);

            // Return a 204 No Content response
            return NoContent();
        }
    }
}
