import React, { useState } from 'react';
import './WaitlistForm.css';

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [queries, setQueries] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScH-pu_lAoK-9QCBnhLYj5KfUylpXp3TEIwXA9f4YZXLYCKPw/formResponse";

    const formData = new FormData();
    formData.append("entry.274893244", name);     // Name
    formData.append("entry.1093877773", email);    // Email
    formData.append("entry.1963943490", queries);  // Questions

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
