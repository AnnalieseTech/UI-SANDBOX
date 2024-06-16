import { useState, useEffect } from "react";

// Initial data from the API
const initialPatientsList = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    physician_id: 101,
    dob: "1990-01-01",
    ssn: "123-45-6789",
    gender: "Male",
    address: "1234 Elm Street, Anytown, AN 12345",
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Smith",
    physician_id: 102,
    dob: "1985-02-15",
    ssn: "987-65-4321",
    gender: "Female",
    address: "5678 Oak Street, Sometown, ST 67890",
  },
  {
    id: 3,
    first_name: "Alice",
    last_name: "Johnson",
    physician_id: 103,
    dob: "1975-03-30",
    ssn: "456-78-9012",
    gender: "Female",
    address: "9101 Pine Street, Everytown, EV 34567",
  },
  {
    id: 4,
    first_name: "Bob",
    last_name: "Brown",
    physician_id: 104,
    dob: "1980-04-20",
    ssn: "321-54-6789",
    gender: "Male",
    address: "2345 Maple Street, Yourtown, YT 54321",
  },
];

const PatientsTable = () => {
  const [patients, setPatients] = useState(initialPatientsList);

  // This would be a replacement for the getPatientInfo and addRow functions
  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          {Object.keys(initialPatientsList[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderTableBody = () => {
    return (
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id}>
            {Object.values(patient).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <table className="table-list">
      {renderTableHeader()}
      {renderTableBody()}
    </table>
  );
};

export default PatientsTable;
