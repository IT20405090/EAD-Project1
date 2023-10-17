using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TravelWebService.Model
{
    public class train
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;

        [BsonElement("status")]
        public bool Status { get; set; }
    }
}
