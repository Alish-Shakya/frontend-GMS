import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

const ResetPassword = () => {
  let [password, setNewPassword] = useState("");

  let navigate = useNavigate();

  let [query] = useSearchParams();
  let token = query.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      password: password,
    };

    try {
      let result = await axios({
        url: `http://localhost:4000/webUser/reset-password`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data,
      });
      console.log(result);
      navigate(`/login`);
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label htmlFor="password">New Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <button>Set new Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
