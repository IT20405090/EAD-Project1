using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TravelWebService.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TravelWebService.Services
{
    public class ScheduleService
    {
        private readonly IMongoCollection<Shedule> _sheduleCollection;

        public ScheduleService(IOptions<UserDatabaseSettings> userDatabaseSettings)
        {
            // Initialize the service with MongoDB settings.
            var mongoClient = new MongoClient(userDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(userDatabaseSettings.Value.DatabaseName);
            _sheduleCollection = mongoDatabase.GetCollection<Shedule>(
                userDatabaseSettings.Value.scheduleCollectionName);
        }

        // Get all schedules
        public async Task<List<Shedule>> GetAsync() =>
            await _sheduleCollection.Find(_ => true).ToListAsync();

        // Get a schedule by ID
        public async Task<Shedule?> GetAsync(string id) =>
            await _sheduleCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // Create a new schedule
        public async Task CreateAsync(Shedule newShedule) =>
            await _sheduleCollection.InsertOneAsync(newShedule);

        // Update an existing schedule
        public async Task UpdateAsync(string id, Shedule updatedShedule)
        {
            await _sheduleCollection.ReplaceOneAsync(x => x.Id == id, updatedShedule);
        }

        // Remove a schedule by ID
        public async Task RemoveAsync(string id) =>
            await _sheduleCollection.DeleteOneAsync(x => x.Id == id);
    }
}
