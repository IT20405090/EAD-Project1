using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TravelWebService.Model
{
    public class Reservations
    {
        [BsonId] // Marks the property as the document's ID
        [BsonRepresentation(BsonType.ObjectId)] // Represents the ID as a BSON ObjectId
        public string? Id { get; set; } // Unique identifier for the reservation

        [BsonElement("TravelerID")] // Maps the property to the "TravelerID" field in the MongoDB document
        public string Traveler { get; set; } = string.Empty; // Identifier of the traveler associated with the reservation

        [BsonElement("TrainID")] // Maps the property to the "TrainID" field in the MongoDB document
        public string Train { get; set; } = string.Empty; // Identifier of the train associated with the reservation

        [BsonElement("Date")] // Maps the property to the "Date" field in the MongoDB document
        public string Date { get; set; } = string.Empty; // Date of the reservation

        [BsonElement("AravingTime")] // Maps the property to the "AravingTime" field in the MongoDB document
        public string ArivingTime { get; set; } = string.Empty; // Arrival time

        [BsonElement("StartingPoint")] // Maps the property to the "StartingPoint" field in the MongoDB document
        public string StartingPoint { get; set; } = string.Empty; // Starting point of the journey

        [BsonElement("EndingPoint")] // Maps the property to the "EndingPoint" field in the MongoDB document
        public string EndingPoint { get; set; } = string.Empty; // Ending point of the journey
    }
}
