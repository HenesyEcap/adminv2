import React, { useEffect, useState } from "react";
import axios from "axios";

const Trainlist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/api/trainlist.php")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (trainId) => {
    // Fetch the train details based on trainId and perform edit logic
    // Update the data state with the edited train
    console.log("Edit train with ID:", trainId);
  };

  const handleDelete = (trainId) => {
    // Perform delete logic
    // Update the data state by removing the deleted train
    console.log("Delete train with ID:", trainId);
  };

  return (
    <div className="bg-white-400 w-full h-full">
      <div className="trainlist pt-3 text-2xl font-bold ml-8 place-content-center">
        <h1 className="text-emerald-900">Train List Available</h1>
      </div>
      <div className="flex place-content-center px-10">
        <table className="w-full mb-10">
          <thead className="bg-emerald-400 border-b-2 border-gray-200">
            <tr>
              <th className="w-28 p-3 text-sm font-bold tracking-wid text-left">
                #
              </th>
              <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">
                Train Name
              </th>
              <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">
                Source
              </th>
              <th className="w-26 p-3 text-sm font-bold tracking-wide text-left">
                Destination
              </th>
              <th className="w-30 p-3 text-sm font-bold tracking-wide text-left">
                AC Fare
              </th>
              <th className="w-30 p-3 text-sm font-bold tracking-wide text-left">
                General Fare
              </th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">
                Weekdays Available
              </th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((train, index) => {
              return (
                <tr key={index} className="bg-white">
                  <td className="p-4 text-sky-600 font-semibold">
                    {train.TrainNumber}
                  </td>
                  <td>{train.TrainName}</td>
                  <td>{train.Source}</td>
                  <td>{train.Destination}</td>
                  <td>{train.AC_Fare}</td>
                  <td>{train.General_Fare}</td>
                  <td>{train.WeekdaysAvailable}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(train.id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(train.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trainlist;
