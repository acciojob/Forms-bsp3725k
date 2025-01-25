import React from "react";
import Card from "./Card";

const Form = () => {
  return (
    <Card>
      <form id="info-form">
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="full_name">Full Name:</label>
          <input id="full_name" type="text" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input id="password_confirmation" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default Form;
