import { useState } from "react";

export const BookingForm2 = ({ onClose }) => {
  const [wasteType, setWasteType] = useState("");

  const [localFormData, setlocalFormData] = useState({
    fname: "",
    phone: "",
    landmark: "",
  });

  let name, value;
  const postlocalFormData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setlocalFormData({ ...localFormData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { fname, phone, landmark } = localFormData;

    if (fname && phone && landmark) {
      const res = fetch(
        "https://nisarga-69463-default-rtdb.firebaseio.com/userBooking.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            fname,
            phone,
            landmark,
            anshead: "Local Bin Pickup",
          }),
        }
      );
      if (res) {
        setlocalFormData({
          fname: "",
          phone: "",
          landmark: "",
        });
        alert("Thank you for booking your Local Bin pick up");
      } else {
        alert("Please Enter the data");
      }
    } else {
      alert("Please Enter the data");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h3>Book a Local Pickup</h3>
      <input
        type="text"
        placeholder="Name"
        name="fname"
        value={localFormData.fname}
        onChange={postlocalFormData}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        name="phone"
        value={localFormData.phone}
        onChange={postlocalFormData}
      />
      <input
        type="text"
        placeholder="Landmark"
        name="landmark"
        value={localFormData.landmark}
        onChange={postlocalFormData}
      />
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="Dry Waste"
            checked={wasteType === "Dry Waste"}
            onChange={() => setWasteType("Dry Waste")}
          />
          Dry Waste
        </label>
        <label>
          <input
            type="radio"
            value="Wet Waste"
            checked={wasteType === "Wet Waste"}
            onChange={() => setWasteType("Wet Waste")}
          />
          Wet Waste
        </label>
        <label>
          <input
            type="radio"
            value="Both"
            checked={wasteType === "Both"}
            onChange={() => setWasteType("Both")}
          />
          Both
        </label>
      </div>
      <button type="submit" onClick={submitData}>
        Submit
      </button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};
