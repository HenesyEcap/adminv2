import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookingInfo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost/api/passenger.php")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4 w-full h-full">
      <div className="trainlist pt-3 text-2xl font-bold ml-8 place-content-center">
        <h1>Passenger's Booking Information</h1>
      </div>
      <div className="flex place-content-center px-10 ">
        <table className="w-full mb-10">
          <thead className="bg-slate-400 border-b-2 border-gray-200">
            <tr>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">#</th>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">Train Number</th>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">Train Date</th>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">First Name</th>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">Last Name</th>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">Age</th>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">Sex</th>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">Address</th>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">Reservation Status</th>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">Category</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {data.map((passenger, index) => (
              <tr key={index}>
                <td>{passenger.TicketID}</td>
                <td>{passenger.TrainNumber}</td>
                <td>{passenger.TrainDate}</td>
                <td>{passenger.Passenger_Fname}</td>
                <td>{passenger.Passenger_Lname}</td>
                <td>{passenger.Age}</td>
                <td>{passenger.Sex}</td>
                <td>{passenger.Address}</td>
                <td>{passenger.ReservationStatus}</td>
                <td>{passenger.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingInfo;