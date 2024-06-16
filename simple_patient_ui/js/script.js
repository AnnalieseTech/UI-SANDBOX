
// represents data from the API
const patientsList = [
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

function addRow(tableID, data, rowType = "cell") {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);

  if (rowType == "header") {
    const header = document.createElement("thead");
    const headerRow = document.createElement("tr");
    
    console.log("Object(data).keys():: ", Object.keys(data));
    Object.keys(data).forEach((headerText) => {
      const headerCell = document.createElement("th");
      console.log("headerText:: ", headerText);
      headerCell.textContent = headerText;
      headerRow.append(headerCell);
    });

    tableRef.appendChild(header);
    header.appendChild(headerRow);
  } else {
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);

    // Loop thru the cell data object keys and values
    Object.entries(data).forEach(([key, value], index) => {
      console.log(`${index}: ${key} = ${value}`);

      // Insert a cell in the row at index i
      let newCell = newRow.insertCell(index);

      // Append a text node to the cell
      let newText = document.createTextNode(value);
      newCell.appendChild(newText);
    });
  }
}

const getPatientInfo = function () {
  // build out our patients table
  // add the header row
  addRow("patients-table", patientsList[0], "header");
  patientsList.forEach(function (patient, index) {
    addRow("patients-table", patient);
  });
};

function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState != "loading") fn();
    });
  }
}

ready(function () {
  getPatientInfo();
});
