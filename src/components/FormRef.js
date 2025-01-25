import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullNameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log("Confirm Password:", passwordConfirmationRef.current.value);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="full_name">Full Name:</label>
          <input id="full_name" ref={fullNameRef} type="text" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label>
          <input id="email" ref={emailRef} type="email" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Password:</label>
          <input id="password" ref={passwordRef} type="password" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input id="password_confirmation" ref={passwordConfirmationRef} type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
