import { useState } from "react";

export const BookingForm4 = ({ onClose }) => {
  const [issueFormData, setIssueFormData] = useState({
    fname: "",
    phone: "",
    doorNumber: "",
    landmark: "",
    issue: "",
  });

  let name, value;
  const postIssueFormData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setIssueFormData({ ...issueFormData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { fname, phone, doorNumber, landmark, issue } = issueFormData;

    if (fname && phone && doorNumber && landmark && issue) {
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
            issue,
            anshead: "Issue Report",
          }),
        }
      );
      if (res) {
        setIssueFormData({
          fname: "",
          phone: "",
          doorNumber: "",
          landmark: "",
          issue: "",
        });
        alert("Thank you for Reporting The Issue");
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
      <h3>Report An Issue</h3>
      <input
        type="text"
        name="fname"
        placeholder="Name"
        value={issueFormData.fname}
        onChange={postIssueFormData}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={issueFormData.phone}
        onChange={postIssueFormData}
      />
      <input
        type="text"
        name="doorNumber"
        placeholder="Door Number"
        value={issueFormData.doorNumber}
        onChange={postIssueFormData}
      />
      <input
        type="text"
        name="landmark"
        placeholder="Landmark"
        value={issueFormData.landmark}
        onChange={postIssueFormData}
      />
      <textarea
        name="issue"
        placeholder="Explain Issue"
        value={issueFormData.issue}
        onChange={postIssueFormData}
      ></textarea>
      <button type="submit" onClick={submitData}>
        Submit
      </button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};
