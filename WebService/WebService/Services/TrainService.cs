using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TravelWebService.Model;

namespace TravelWebService.Services
{
    public class TrainService
    {
        private readonly IMongoCollection<train> _trainCollection;

        public TrainService(IOptions<UserDatabaseSettings> userDatabaseSettings)
        {
            // Initialize the service with MongoDB settings.
            var mongoClient = new MongoClient(userDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(userDatabaseSettings.Value.DatabaseName);
            _trainCollection = mongoDatabase.GetCollection<train>(userDatabaseSettings.Value.trainCollectionName);
        }

        // Get all trains
        public async Task<List<train>> GetAsync() =>
            await _trainCollection.Find(_ => true).ToListAsync();

        // Get a train by ID
        public async Task<train?> GetAsync(string id) =>
            await _trainCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // Create a new train
        public async Task CreateAsync(train newTrain) =>
            await _trainCollection.InsertOneAsync(newTrain);

        // Update an existing train
        public async Task UpdateAsync(string id, train updatedTrain) =>
            await _trainCollection.ReplaceOneAsync(x => x.Id == id, updatedTrain);

        // Remove a train by ID
        public async Task RemoveAsync(string id) =>
            await _trainCollection.DeleteOneAsync(x => x.Id == id);
    }
}
