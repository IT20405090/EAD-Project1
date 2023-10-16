package com.example.reservationmanagement;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class ReservationAdapter extends RecyclerView.Adapter<ReservationAdapter.ReservationViewHolder> {

    private List<Reservation> reservations;

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
        // Notify that the dataset has changed, specifying the entire range
        notifyItemRangeChanged(0, reservations.size());
    }

    @NonNull
    @Override
    public ReservationViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        // Inflate the layout for a single reservation item
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.reservation_item, parent, false);

        // Return a new instance of ReservationViewHolder for the inflated view
        return new ReservationViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ReservationViewHolder holder, int position) {
        if (reservations != null && position < reservations.size()) {
            // Get the reservation at the specified position
            Reservation reservation = reservations.get(position);

            // Bind the reservation data to the ViewHolder
            holder.bind(reservation);
        }
    }


    @Override
    public int getItemCount() {
        // Return the number of reservations in the list, or 0 if the list is null
        return reservations != null ? reservations.size() : 0;
    }

    static class ReservationViewHolder extends RecyclerView.ViewHolder {

        private TextView dateTextView;
        private TextView timeTextView;
        private TextView fromTextView;
        private TextView toTextView;
        private TextView seatsTextView;

        public ReservationViewHolder(@NonNull View itemView) {
            super(itemView);

            // Initialize TextViews for the reservation data
            dateTextView = itemView.findViewById(R.id.textViewDate);
            timeTextView = itemView.findViewById(R.id.textViewTime);
            fromTextView = itemView.findViewById(R.id.textViewdestifrom);
            toTextView = itemView.findViewById(R.id.textViewdestito);
            seatsTextView = itemView.findViewById(R.id.textViewnumseats);
        }

        public void bind(Reservation reservation) {
            // Populate the TextViews with reservation data
            dateTextView.setText("Date: " + reservation.getDate());
            timeTextView.setText("Time: " + reservation.getTime());
            fromTextView.setText("Destination From: " + reservation.getDestinationFrom());
            toTextView.setText("Destination To: " + reservation.getDestinationTo());
            seatsTextView.setText("Seats: " + reservation.getSeats());
        }
    }
}
