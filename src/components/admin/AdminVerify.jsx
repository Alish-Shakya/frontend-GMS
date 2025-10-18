import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";
import axios from "axios";

const AdminVerify = () => {
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();

  let token = searchParams.get("token");

  let verifyEmail = async () => {
    try {
      let result = await axios({
        url: "http://localhost:4000/webUser/verifyEmail",
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyEmail();
  }, []);

  return (
    <>
      <div className=""> Admin Verify</div>
    </>
  );
};
export default AdminVerify;
