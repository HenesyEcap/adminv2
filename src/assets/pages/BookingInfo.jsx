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

  const handleCancelBooking = (ticketId) => {
    axios
      .post("http://localhost/api/cancel-booking.php", { ticketId })
      .then(res => {
        console.log(`Booking with ticket ID ${ticketId} has been canceled.`);
        setData(data.filter(passenger => passenger.TicketID !== ticketId));
      })
      .catch(err => {
        console.log(`Failed to cancel booking with ticket ID ${ticketId}.`, err);
      });
  };

  const handleUpdateBooking = (ticketId) => {
    axios
      .put("http://localhost/api/update-booking.php", { ticketId })
      .then(res => {
        console.log(`Booking with ticket ID ${ticketId} has been updated.`);
        // Perform any necessary updates in the UI after a successful update
      })
      .catch(err => {
        console.log(`Failed to update booking with ticket ID ${ticketId}.`, err);
      });
  };

  return (
    <>
      <Link to="/WelcomePage">
        <button
          style={{
            backgroundColor: '#ffffff',
            color: '#333333',
            padding: '10px 40px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        >
          Back
        </button>
      </Link>
      <div className="container mt-4 w-full h-full">
        <div className="trainlist pt-3 text-2xl font-bold ml-8 place-content-center">
          <h1>Passenger's Booking Information</h1>
        </div>
        <div className="flex justify-center px-10">
          <table className="w-full mb-10">
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
                <tr key={index}>
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
                      onClick={() => handleCancelBooking(passenger.TicketID)}
                      style={{
                        backgroundColor: '#ff0000',
                        color: '#ffffff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '16px',
                        marginRight: '10px',
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleUpdateBooking(passenger.TicketID)}
                      style={{
                        backgroundColor: '#333333',
                        color: '#ffffff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '16px',
                      }}
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
