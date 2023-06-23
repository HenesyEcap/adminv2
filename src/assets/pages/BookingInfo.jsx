import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookingInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/api/passenger.php")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleUpdateBooking = (ticketId) => {
    const reservationStatus = prompt("Enter the new reservation status (reserved, pending, cancel):");

    if (reservationStatus) {
      axios
        .put("http://localhost/api/update-booking.php", { ticketId, reservationStatus })
        .then(res => {
          console.log(`Booking with ticket ID ${ticketId} has been updated.`);
          // Perform any necessary updates in the UI after a successful update
        })
        .catch(err => {
          console.log(`Failed to update booking with ticket ID ${ticketId}.`, err);
        });
    }
  };

  return (
    <>
    
      <div className="container mx-auto mt-8">
        <div className="text-2xl font-bold text-center mb-6">
          <h1>Passenger's Booking Information</h1>
        </div>
        <div className="flex justify-end mr-8 mt-4">
        <Link to="/WelcomePage">
          <button className="bg-white text-gray-900 px-6 py-2 rounded-md text-lg">
            Back
          </button>
        </Link>
      </div>
        <div className="flex justify-center px-10">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-sm font-bold">#</th>
                <th className="p-3 text-sm font-bold">Train Number</th>
                <th className="p-3 text-sm font-bold">Train Date</th>
                <th className="p-3 text-sm font-bold">First Name</th>
                <th className="p-3 text-sm font-bold">Last Name</th>
                <th className="p-3 text-sm font-bold">Age</th>
                <th className="p-3 text-sm font-bold">Sex</th>
                <th className="p-3 text-sm font-bold">Address</th>
                <th className="p-3 text-sm font-bold">Reservation Status</th>
                <th className="p-3 text-sm font-bold">Category</th>
                <th className="p-3 text-sm font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((passenger, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="p-3">{passenger.TicketID}</td>
                  <td className="p-3">{passenger.TrainNumber}</td>
                  <td className="p-3">{passenger.TrainDate}</td>
                  <td className="p-3">{passenger.Passenger_Fname}</td>
                  <td className="p-3">{passenger.Passenger_Lname}</td>
                  <td className="p-3">{passenger.Age}</td>
                  <td className="p-3">{passenger.Sex}</td>
                  <td className="p-3">{passenger.Address}</td>
                  <td className="p-3">{passenger.ReservationStatus}</td>
                  <td className="p-3">{passenger.Category}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleUpdateBooking(passenger.TicketID)}
                      className="bg-gray-900 text-white px-4 py-2 rounded-md text-lg"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default BookingInfo;
