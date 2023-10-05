import { useState } from "react";

export const BookingForm1 = ({ onClose }) => {
  const [wasteType, setWasteType] = useState("");

  const [houseFormData, setHouseFormData] = useState({
    fname: "",
    phone: "",
    doorNumber: "",
    landmark: "",
  });

  let name, value;
  const postHouseFormData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setHouseFormData({ ...houseFormData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { fname, phone, doorNumber, landmark } = houseFormData;

    if (fname && phone && doorNumber && landmark) {
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
            doorNumber,
            landmark,
            anshead: "House Bin Pickup",
          }),
        }
      );
      if (res) {
        setHouseFormData({
          fname: "",
          phone: "",
          doorNumber: "",
          landmark: "",
        });
        alert("Thank you for booking your house pick up");
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
    <form method="POST" onSubmit={handleSubmit} className="booking-form">
      <h3>Book a House Pickup</h3>
      <input
        type="text"
        name="fname"
        placeholder="Name"
        value={houseFormData.fname}
        onChange={postHouseFormData}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={houseFormData.phone}
        onChange={postHouseFormData}
      />
      <input
        type="text"
        name="doorNumber"
        placeholder="Door Number"
        value={houseFormData.doorNumber}
        onChange={postHouseFormData}
      />
      <input
        type="text"
        name="landmark"
        placeholder="Landmark"
        value={houseFormData.landmark}
        onChange={postHouseFormData}
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
