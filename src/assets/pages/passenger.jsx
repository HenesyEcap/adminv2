import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";

const passenger = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/api/passenger.php")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-orange-400 w-full h-full">
      <Header />
      <div className="trainlist p-5 pt-32 text-2xl font-bold ml-8 place-content-center">
        <h1 className="text-emerald-900">Passenger List</h1>
      </div>
      <div className="flex place-content-center px-10">
        <table className="w-full mb-10">
          <thead className="bg-emerald-400 border-b-2 border-gray-200">
            <tr>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">Ticket ID</th>
              <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">Train Name</th>
              <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">Train Date</th>
              <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">First Name</th>
              <th className="w-30 p-3 text-sm font-bold tracking-wide text-left">Last Name</th>
              <th className="w-30 p-3 text-sm font-bold tracking-wide text-left">Age</th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">Sex</th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">Address</th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">Reservation Status</th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map((passenger, index) => (
              <tr key={index} className="bg-white">
                <td className="p-4 text-sky-600 font-semibold">{passenger.TicketID}</td>
                <td>{passenger.TrainName}</td>
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
};

export default passenger;