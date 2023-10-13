using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TravelWebService.Model
{
    public class Shedule
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("TrainId")]
        public string TrainId { get; set; } = string.Empty;

        [BsonElement("Start")]
        public string Start { get; set; } = string.Empty;

        [BsonElement("End")]
        public string End { get; set; } = string.Empty;

        [BsonElement("ArivingTime")]
        public string ArivingTime { get; set; } = string.Empty;

        [BsonElement("DepatureTime")]
        public string DepatureTime { get; set; } = string.Empty;

        [BsonElement("Date")]
        public string Date { get; set; } = string.Empty;

        [BsonElement("StartingStation")]
        public string StartingStation { get; set; } = string.Empty;

        [BsonElement("Seats")]
        public int Seats { get; set; } = 0;

        [BsonElement("Duration")]
        public string Duration { get; set; } = string.Empty;

        [BsonElement("TrainName")]
        public string TrainName { get; set; } = string.Empty;

        [BsonElement("EndingStation")]
        public string EndingStation { get; set; } = string.Empty;

        [BsonElement("Notices")]
        public string Notices { get; set; } = string.Empty;
    }
}
