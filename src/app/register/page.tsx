"use client";

import React from "react";

const Register = () => {
  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          backgroundColor: "#76abae",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "120px",
        }}
      >
        <div>
          <img
            src="/logo-placeholder.png" // Replace with actual logo path
            alt="Logo"
            style={{ height: "70px" }}
          />
        </div>
        <nav style={{ display: "flex", gap: "2rem" }}>
          <a
            href="/home"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Home
          </a>
          <a
            href="/login"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Log In
          </a>
        </nav>
      </header>

      {/* Main Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "87.5vh",
          backgroundColor: "##222831",
        }}
      >
        <div
          style={{
            backgroundColor: "#d9d9d9",
            padding: "3rem",
            borderRadius: "20px",
            width: "33%", // Narrower for portrait style
            height: "70vh", // Taller for portrait proportions
            textAlign: "center",
            boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem", textAlign: "left", }}>Register</h2>
          <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* First Name and Last Name */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="text"
                placeholder="First Name"
                style={{
                  flex: 1,
                  padding: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "7px",
                  backgroundColor: "#bcbdbf",
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                style={{
                  flex: 1,
                  padding: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "7px",
                  backgroundColor: "#bcbdbf",
                }}
              />
            </div>

            {/* Phone and Email */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="text"
                placeholder="Phone"
                style={{
                  flex: 1,
                  padding: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "7px",
                  backgroundColor: "#bcbdbf",
                }}
              />
              <input
                type="email"
                placeholder="Email"
                style={{
                  flex: 1,
                  padding: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "7px",
                  backgroundColor: "#bcbdbf",
                }}
              />
            </div>

            {/* Password and Confirm Password */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="password"
                placeholder="Password"
                style={{
                  flex: 1,
                  padding: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "7px",
                  backgroundColor: "#bcbdbf",
                }}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                style={{
                  flex: 1,
                  padding: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "7px",
                  backgroundColor: "#bcbdbf",
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#76abae",
                border: "none",
                color: "white",
                borderRadius: "20px", // Rounded rectangle
                cursor: "pointer",
                fontSize: "1.5rem",
                textAlign: "center",
                margin: "2rem auto 0",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#36a9ae")
              }
              onMouseOut={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#76abae")
              }
            >
              →
            </button>
          </form>
          <p
            style={{
              marginTop: "2rem",
              fontSize: "1rem",
              color: "#6c757d",
            }}
          >
            Already Have an Account?{" "}
            <a
              href="/login"
              style={{
                color: "#50c9c3",
                textDecoration: "none",
              }}
              onMouseOver={(e) =>
                ((e.target as HTMLElement).style.textDecoration = "underline")
              }
              onMouseOut={(e) =>
                ((e.target as HTMLElement).style.textDecoration = "none")
              }
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
