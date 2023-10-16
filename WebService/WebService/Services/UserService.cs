using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TravelWebService.Model;

namespace TravelWebService.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _userCollection;

        public UserService(
            IOptions<UserDatabaseSettings> userDatabaseSettings)
        {
            // Initialize the service with MongoDB settings.
            var mongoClient = new MongoClient(userDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(userDatabaseSettings.Value.DatabaseName);
            _userCollection = mongoDatabase.GetCollection<User>(userDatabaseSettings.Value.userCollectionName);
        }

        // Get all users
        public async Task<List<User>> GetAsync() =>
            await _userCollection.Find(_ => true).ToListAsync();

        // Get a user by ID
        public async Task<User?> GetAsync(string id) =>
            await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // Create a new user
        public async Task CreateAsync(User newUser) =>
            await _userCollection.InsertOneAsync(newUser);

        // Update an existing user
        public async Task UpdateAsync(string id, User updatedUser) =>
            await _userCollection.ReplaceOneAsync(x => x.Id == id, updatedUser);

        // Remove a user by ID
        public async Task RemoveAsync(string id) =>
            await _userCollection.DeleteOneAsync(x => x.Id == id);

        // Get a user by email (username)
        public async Task<User?> GetByUsernameAsync(string email) =>
            await _userCollection.Find(x => x.Email == email).FirstOrDefaultAsync();
    }
}
