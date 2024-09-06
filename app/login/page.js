"use client"; // ระบุว่าไฟล์นี้เป็น Client Component

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // สำหรับ App Router

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // ใช้สำหรับแสดงข้อความ
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { username, password });
      console.log('Login response:', response.data);
      if (response.data.token) {
        // เก็บ token ใน Local Storage หรือ Cookie เพื่อใช้งานในภายหลัง
        localStorage.setItem("token", response.data.token);

        // แสดงข้อความสำเร็จ
        setMessage("Login successful!");

        // รอ 1 วินาทีเพื่อให้ผู้ใช้เห็นข้อความ
        setTimeout(() => {
          router.push("/kome"); // เปลี่ยนเส้นทางไปยังหน้า kome
        }, 1000);
      } else {
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error.response ? error.response.data : error.message);
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleBackToHome = () => {
    router.push("/"); // เปลี่ยนเส้นทางกลับไปที่หน้าหลัก
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
        <button
          type="button"
          className="btn btn-secondary w-100"
          onClick={handleBackToHome}
        >
          Back to Home
        </button>
      </form>
      {message && <p className="mt-3 text-center" style={{ color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>} {/* แสดงข้อความ */}
    </div>
  );
}
