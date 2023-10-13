package com.example.reservationmanagement;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitClient {

    // The base URL for your API
    private static final String BASE_URL = "http://10.0.2.2:5010/";

    // Singleton instance of Retrofit to ensure a single instance is used throughout the app
    private static Retrofit retrofit;

    // This method returns the Retrofit instance for making API calls
    public static Retrofit getClient() {
        // If the Retrofit instance is not initialized, create a new one
        if (retrofit == null) {
            retrofit = new Retrofit.Builder()
                    .baseUrl(BASE_URL)
                    .addConverterFactory(GsonConverterFactory.create()) // Use Gson for JSON serialization/deserialization
                    .build();
        }
        return retrofit;
    }
}
