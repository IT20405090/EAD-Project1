using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TravelWebService.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TravelWebService.Services
{
    public class ReservationServices
    {
        private readonly IMongoCollection<Reservations> _reservationCollection;

        public ReservationServices(IOptions<UserDatabaseSettings> userDatabaseSettings)
        {
            // Initialize the service with MongoDB settings.
            var mongoClient = new MongoClient(userDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(userDatabaseSettings.Value.DatabaseName);
            _reservationCollection = mongoDatabase.GetCollection<Reservations>(
                userDatabaseSettings.Value.resevertionCollectionName);
        }

        // Get all reservations
        public async Task<List<Reservations>> GetAsync() =>
            await _reservationCollection.Find(_ => true).ToListAsync();

        // Get a reservation by ID
        public async Task<Reservations?> GetAsync(string id) =>
            await _reservationCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // Create a new reservation
        public async Task CreateAsync(Reservations newReservation) =>
            await _reservationCollection.InsertOneAsync(newReservation);

        // Update an existing reservation
        public async Task UpdateAsync(string id, Reservations updatedReservation)
        {
            await _reservationCollection.ReplaceOneAsync(x => x.Id == id, updatedReservation);
        }

        // Remove a reservation by ID
        public async Task RemoveAsync(string id) =>
            await _reservationCollection.DeleteOneAsync(x => x.Id == id);

        // Get reservations by TravelerID
        public async Task<List<Reservations>> GetByTravelerAsync(string travelerId) =>
            await _reservationCollection.Find(x => x.Traveler == travelerId).ToListAsync();

        // Get reservations by TrainID
        public async Task<List<Reservations>> GetByTrainAsync(string trainId) =>
            await _reservationCollection.Find(x => x.Train == trainId).ToListAsync();
    }
}
