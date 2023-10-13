using TravelWebService.Model;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Runtime.CompilerServices;

namespace TravelWebService.Services
{
    public class ReservationService
    {
        private readonly IMongoCollection<Reservations> _ReservationsCollection;

        // Constructor to initialize the service with database settings
        public ReservationService(IOptions<UserDatabaseSettings> userDatabaseSettings)
        {
            // Create a MongoDB client and get the database and collection
            MongoClient client = new MongoClient(userDatabaseSettings.Value.ConnectionURI);
            IMongoDatabase database = client.GetDatabase(userDatabaseSettings.Value.DatabaseName);
            _ReservationsCollection = database.GetCollection<Reservations>(userDatabaseSettings.Value.CollectionNameReser);
        }

        // Method to create a new reservation asynchronously
        public async Task CreateAsync(Reservations reservations)
        {
            await _ReservationsCollection.InsertOneAsync(reservations);
            return;
        }

        // Method to retrieve all reservations asynchronously
        public async Task<List<Reservations>> GetAsync()
        {
            return await _ReservationsCollection.Find(new BsonDocument()).ToListAsync();
        }

        // Method to update a reservation asynchronously by ID
        public async Task UpdatedReservationAsync(string id, string date, string time, string destinationfrom, string destinationto, string seats)
        {
            // Define a filter to find the document with the specified ID
            var filter = Builders<Reservations>.Filter.Eq(x => x.Id, id);

            // Define an update with the new values for the fields
            var update = Builders<Reservations>.Update
                .Set(x => x.Date, date)
                .Set(x => x.Time, time)
                .Set(x => x.DestinationFrom, destinationfrom)
                .Set(x => x.DestinationTo, destinationto)
                .Set(x => x.Seats, seats);

            // Perform the update operation
            await _ReservationsCollection.UpdateOneAsync(filter, update);
        }

        // Method to delete a reservation asynchronously by ID
        public async Task DeleteAsync(string id)
        {
            FilterDefinition<Reservations> filter = Builders<Reservations>.Filter.Eq("Id", id);
            await _ReservationsCollection.DeleteOneAsync(filter);
            return;
        }

        // Method to get a reservation by ID asynchronously
        public async Task<Reservations> GetReservationByIdAsync(string id)
        {
            // Define a filter to find the document with the specified ID
            var filter = Builders<Reservations>.Filter.Eq(x => x.Id, id);

            // Use the Find method with the filter to find the reservation by ID
            var result = await _ReservationsCollection.Find(filter).FirstOrDefaultAsync();

            return result;
        }
    }
}
