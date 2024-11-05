// src/components/PopupContactForm.js

import React from "react";

// Replace this with your actual Google Form URL
const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfza5Oi6GhQfTJpfWCX_7AmDrZqJu6r2E0gPLc15Q9z9qy0YA/formResponse";

// Replace these entry IDs with your actual form field IDs from the pre-filled URL
const GOOGLE_FORM_ENTRY_NAME = "entry.372664377";
const GOOGLE_FORM_ENTRY_PHONE = "entry.39876554";
const GOOGLE_FORM_ENTRY_BUDGET = "entry.597738789";

const PopupContactForm = ({ onClose }) => {
  const [formData, setFormData] = React.useState({
    Name: "",
    Phno: "",
    Budget: "",
  });

  const [submissionStatus, setSubmissionStatus] = React.useState(""); // State for success/failure message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for Google Form submission
    const formBody = new URLSearchParams();
    formBody.append(GOOGLE_FORM_ENTRY_NAME, formData.Name);
    formBody.append(GOOGLE_FORM_ENTRY_PHONE, formData.Phno);
    formBody.append(GOOGLE_FORM_ENTRY_BUDGET, formData.Budget);

    try {
      // Send form data to Google Forms
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: formBody,
        mode: "no-cors", // Important for Google Forms
      });

      // Clear the form and show success message
      setFormData({ Name: "", Phno: "", Budget: "" });
      setSubmissionStatus("success");
    } catch (error) {
      // Show failure message if form submission fails
      setSubmissionStatus("failure");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#5cc599] rounded-lg p-6 w-11/12 max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-2 text-3xl text-red-600"
        >
          &times; {/* Close icon */}
        </button>
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="Name"
              className="border rounded w-full px-3 py-2"
              placeholder="Your Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2"
              htmlFor="text"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="Phno"
              className="border rounded w-full px-3 py-2"
              placeholder="Your Phone Number"
              value={formData.Phno}
              onChange={handleChange}
              required
            />
          </div>

          {/* Investment Budget Dropdown */}
          <div>
            <label
              className="block text-[#333] text-lg mb-1"
              htmlFor="budget"
            >
              Investment Budget
            </label>
            <select
              name="Budget"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077b6] transition duration-300"
              value={formData.Budget}
              onChange={handleChange}
              required
            >
              <option
                value=""
                disabled
              >
                Select your budget
              </option>
              <option value="Under 50 lakh">Under 50 lakh</option>
              <option value="50 lakh to 2 cr">50 lakh to 2 cr</option>
              <option value="Above 2 cr">Above 2 cr</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#fa6c9b] text-white py-2 px-4 mt-5 rounded-md hover:bg-[#508ecf] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Submission Status Messages */}
        {submissionStatus === "success" && (
          <p className="text-blue-600 mt-4">Message sent successfully!</p>
        )}
        {submissionStatus === "failure" && (
          <p className="text-red-600 mt-4">
            Failed to send the message. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default PopupContactForm;
