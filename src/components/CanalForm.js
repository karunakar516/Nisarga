import { useState } from "react";
export const BookingForm3 = ({ onClose }) => {
  const [canalFormData, setCanalFormData] = useState({
    fname: "",
    phone: "",
    landmark: "",
  });

  let name, value;
  const postCanalFormData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setCanalFormData({ ...canalFormData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { fname, phone, landmark } = canalFormData;

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
            anshead: "Canal Pickup",
          }),
        }
      );
      if (res) {
        setCanalFormData({
          fname: "",
          phone: "",
          landmark: "",
        });
        alert("Thank you for booking a Canal Cleanup");
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
      <h3>Canal Cleaning</h3>
      <input
        type="text"
        placeholder="Name"
        name="fname"
        value={canalFormData.fname}
        onChange={postCanalFormData}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        name="phone"
        value={canalFormData.phone}
        onChange={postCanalFormData}
      />
      <input
        type="text"
        placeholder="Landmark"
        name="landmark"
        value={canalFormData.landmark}
        onChange={postCanalFormData}
      />

      <button type="submit" onClick={submitData}>
        Submit
      </button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};
