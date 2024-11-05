import React, { useState } from "react";
import contact from "../../assets/contactus.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({ Name: "", Phno: "", Budget: "" });
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "",
  });

  // Google Form URL and field entry IDs
  const googleFormActionURL =
    "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfza5Oi6GhQfTJpfWCX_7AmDrZqJu6r2E0gPLc15Q9z9qy0YA/formResponse";
  const googleFields = {
    Name: "entry.372664377",
    Phno: "entry.39876554",
    Budget: "entry.597738789",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", type: "" });

    const formBody = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) =>
      formBody.append(googleFields[key], value)
    );

    try {
      await fetch(googleFormActionURL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });
      setStatus({
        loading: false,
        message: "Message sent successfully!",
        type: "success",
      });
      setFormData({ Name: "", Phno: "", Budget: "" }); // Clear form after success
    } catch {
      setStatus({
        loading: false,
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="bg-[#f7f9fc] py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden bg-[#5cc599]">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-semibold text-[#333] mb-4">
            Get in Touch
          </h1>
          {status.message && (
            <p
              className={`mb-4 ${
                status.type === "success" ? "text-blue-500" : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}

          <form
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            {/* Name Field */}
            <div>
              <label
                className="block text-[#333] text-lg mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077b6] transition duration-300"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                className="block text-[#333] text-lg mb-1"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="Phno"
                value={formData.Phno}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077b6] transition duration-300"
                placeholder="Enter your phone number"
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
                value={formData.Budget}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077b6] transition duration-300"
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0077b6] text-white py-2 rounded-md font-semibold hover:bg-[#005f87] transition duration-300"
              disabled={status.loading}
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full md:sh-64 md:h-full">
            <img
              src={contact}
              alt="Contact Us"
              className="w-full h-full object-cover rounded-l-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-l-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
