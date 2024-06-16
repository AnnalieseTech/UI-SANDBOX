import React, { useState } from "react";

function ContactUsForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You might want to replace the alert with a call to an API to actually submit the form data
    alert(JSON.stringify(formData));
  };

  return (
    <div className="form-container">
      <form id="contactus-form" onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstName"
          placeholder="Your name.."
          onChange={handleChange}
          value={formData.firstName}
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastName"
          placeholder="Your last name.."
          onChange={handleChange}
          value={formData.lastName}
        />

        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          onChange={handleChange}
          value={formData.country}
        >
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
        </select>

        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: "200px" }}
          onChange={handleChange}
          value={formData.subject}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactUsForm;
