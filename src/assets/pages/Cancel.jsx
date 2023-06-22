import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import BookButton from "../components/BookButton";

const Cancel = () => {
  const [ticketID, setTicketID] = useState("");
  const [passengerData, setPassengerData] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate= useNavigate();

  const handleClick = () => {
    // Navigate to the desired page when the button is clicked
    navigate('/book');
  };

  const handleCancel = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost/api/cancel.php", {
        TicketID: ticketID 
      });
      console.log("Cancel button clicked");
      console.log("Ticket ID:", ticketID);
      
     
    
      const { success, message, passengerData } = response.data;
      if (success) {
        setMessage(message);
        setPassengerData(passengerData);
        console.log(success, message, passengerData);
      } else {
        setError(message);
      }
    } catch (error) {
      setError("Error canceling booking. Please try again.");
    }
  }; 

  return (
    <div className="bg-orange-400 min-h-screen">
      <div className="trainlist p-5 pt-32 text-2xl font-bold ml-8 place-content-center">
        <h1 className="text-emerald-900">CANCEL BOOKING</h1>
      </div>
        
      <div className="flex justify-center">
        <form onSubmit={handleCancel}>
          <input
            type="text"
            name="TicketID"
            placeholder="Enter Ticket ID"
            className="px-4 py-2 mr-2 rounded-lg focus:outline-none focus:bg-white"
            value={ticketID}
            onChange={(e) => setTicketID(e.target.value)}
          />

          <button
          onClick={handleCancel}
            className="px-4 py-2 font-bold text-white bg-emerald-700 rounded-lg hover:bg-emerald-900 focus:outline-none focus:bg-orange-500"
            type="submit" name="delete">
            Cancel Booking 
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center pt-3 text-2xl font-bold">
    <h1 className="text-emerald-900">Passenger Data: </h1>
  </div>

      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}

      {passengerData && (
        
         <div className="passenger-info bg-white p-4 rounded-lg shadow-md">
         <h2 className="text-2xl font-bold mb-4">Passenger Information:</h2>
         <h3 className="text-2xl font-bold mb-4">The following Information has been deleted:</h3>
         <p className="text-gray-700 mb-2">Ticket ID: {passengerData.TicketID}</p>
         <p className="text-gray-700 mb-2">Name: {passengerData.Name}</p>
         <p className="text-gray-700 mb-2">Age: {passengerData.Age}</p>
         <p className="text-gray-700 mb-2">Gender: {passengerData.Gender}</p>
         {/* Add more details as needed */}
       </div>
       
      )}
       <div className="flex flex-col items-center justify-center h-screen">
  <div className="flex flex-col items-center pt-32 text-2xl font-bold">
    <h1 className="text-emerald-900">BOOK ANOTHER?</h1>
  </div>
  <div className="flex justify-center pt-4">
    <div onClick={handleClick}>
      <BookButton />
    </div>
  </div>
</div>
    </div>
  );
};

export default Cancel;
