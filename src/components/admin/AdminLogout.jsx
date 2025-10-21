import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AdminLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        Swal.fire(
          "Logged out!",
          "You have been successfully logged out.",
          "success"
        ).then(() => {
          navigate("/");
        });
      } else {
        // If cancel, you can navigate back or do nothing
        navigate(-1); // Go back to previous page
      }
    });
  }, [navigate]);

  return null;
};

export default AdminLogout;
