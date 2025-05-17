import React, { useState } from 'react';
import './WaitlistForm.css';

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [queries, setQueries] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL = 
      "https://docs.google.com/forms/d/e/1FAIpQLSe96q78kS2qGTsrQRX9Yf2I3vYGFlU5fT4SDhVYyPBGfZaziQ/formResponse";
    const formData = new FormData();
    formData.append("entry.1806262846", name);    // ← your Name field ID
    formData.append("entry.4674183", email);      // ← your Email field ID
    formData.append("entry.1234567890", queries); // ← replace with your Queries field ID

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        alert("Thank you! Your details have been submitted.");
        setName("");
        setEmail("");
        setQueries("");
      })
      .catch((err) => {
        console.error(err);
        alert("Oops! There was an error submitting the form.");
      });
  };

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Any questions?"
        value={queries}
        onChange={(e) => setQueries(e.target.value)}
        rows="3"
      />
      <button type="submit" className="button-primary">
        Submit
      </button>
    </form>
  );
}
