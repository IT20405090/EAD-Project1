using System;
using Microsoft.AspNetCore.Mvc;
using TravelWebService.Services;
using TravelWebService.Model;

namespace MongoExample.Controllers;

[Controller]
[Route("api/[controller]")]
public class ReservationController : Controller{

    
     private readonly ReservationService _reservationservice;

      public ReservationController(ReservationService reservationservice){
        _reservationservice = reservationservice;
    }

    
    [HttpGet]
    public async Task<List<Reservations>> Get(){
        return await _reservationservice.GetAsync();
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Reservations reservations)
    {
        try
        {
            await _reservationservice.CreateAsync(reservations);
            return Ok("Data posted successfully");
        }
        catch (Exception ex)
        {
            // Handle exceptions here, you can return a 500 Internal Server Error if something goes wrong
            return StatusCode(500, $"Internal Server Error: {ex.Message}");
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> AddToReservations(string id, [FromBody] Reservations updatedReservation)
    {
        try
        {
            // Call the MongoDB service to update the UserRegistration
            await _reservationservice.UpdatedReservationAsync(id, updatedReservation.Date, updatedReservation.Time, updatedReservation.DestinationFrom, updatedReservation.DestinationTo, updatedReservation.Seats);

            return Ok("updated successfully");
        }
        catch (Exception ex)
        {
            // Handle exceptions here, you can return a 500 Internal Server Error if something goes wrong
            return StatusCode(500, $"Internal Server Error: {ex.Message}");
        }
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        try
        {
            await _reservationservice.DeleteAsync(id);
            return Ok("Data deleted successfully");
        }
        catch (Exception ex)
        {
            // Handle exceptions here, you can return a 500 Internal Server Error if something goes wrong
            return StatusCode(500, $"Internal Server Error: {ex.Message}");
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(string id)
    {
        try
        {
            // Call the MongoDB service to retrieve a reservation by ID
            var reservation = await _reservationservice.GetReservationByIdAsync(id);

            if (reservation == null)
            {
                // Return a 404 Not Found response if the reservation is not found
                return NotFound();
            }

            return Ok(reservation);
        }
        catch (Exception ex)
        {
            // Handle exceptions here, you can return a 500 Internal Server Error if something goes wrong
            return StatusCode(500, $"Internal Server Error: {ex.Message}");
        }
    }




}