import React, { useState, useEffect } from "react";
import axios from "axios";

const Protected = ({ token }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data.message);
      } catch (error) {
        console.error("Authentication failed:", error.response.data.message);
      }
    };

    fetchProtectedData();
  }, [token]);

  return (
    <div>
      <h2>Protected Page</h2>
      <p>{message}</p>
    </div>
  );
};

export default Protected;