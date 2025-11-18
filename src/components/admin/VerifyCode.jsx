import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const VerifyCode = ({ email, onVerified }) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/webUser/verify-code",
        {
          email,
          code,
        }
      );

      if (res.data.success) {
        toast.success("Code verified!");
        onVerified(email); // move to reset password
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Verify Code</h2>

        <input
          type="text"
          placeholder="Enter 6-digit code"
          maxLength={6}
          className="w-full border p-2 rounded mb-4 text-center tracking-widest text-lg"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          {loading ? "Verifying..." : "Verify Code"}
        </button>
      </form>
    </div>
  );
};

export default VerifyCode;
