using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace TravelWebService.Models
{
    public class Reservations
    {
        [BsonId] // Marks the property as the document's ID
        [BsonRepresentation(BsonType.ObjectId)] // Represents the ID as a BSON ObjectId
        public string? Id { get; set; } // Unique identifier for the reservation

        [BsonElement("date")] // Maps the property to the "date" field in the MongoDB document
        public string Date { get; set; } = string.Empty; // Date of the reservation

        [BsonElement("time")] // Maps the property to the "time" field in the MongoDB document
        public string Time { get; set; } = string.Empty; // Time of the reservation

        [BsonElement("destinationfrom")] // Maps the property to the "destinationfrom" field in the MongoDB document
        public string DestinationFrom { get; set; } = string.Empty; // Departure destination

        [BsonElement("destinationto")] // Maps the property to the "destinationto" field in the MongoDB document
        public string DestinationTo { get; set; } = string.Empty; // Arrival destination

        [BsonElement("seats")] // Maps the property to the "seats" field in the MongoDB document
        public string Seats { get; set; } = string.Empty; // Number of seats in the reservation
    }
}
