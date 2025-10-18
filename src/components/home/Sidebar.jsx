import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  let [greeting, setGreeting] = useState();

  const greetingMessage = () => {
    const currentHrs = new Date().getHours();
    if (currentHrs < 12) {
      setGreeting("Good Morning");
    } else if (currentHrs < 18) {
      setGreeting("Good Afternoon");
    } else if (currentHrs < 21) {
      setGreeting("Good Night");
    } else {
      setGreeting("Good Night");
    }
  };

  useEffect(() => {
    greetingMessage();
  });

  return (
    <div className="w-1/4 h-[100vh] border-2 border-black bg-black text-white font-extralight p-5">
      <div className="text-center text-3xl">Planet Fitness Kapan</div>

      <div className="flex gap-5 my-5">
        <div className="w-[100px] h-[100px] rounded-lg">
          <img
            src="images/gym-bg.png"
            alt="pic"
            className="w-full rounded-full h-full"
          />
        </div>

        <div>
          <div className="text-2xl">{greeting}</div>
          <div className="text-xl font-semibold mt-1">Admin</div>
        </div>
      </div>

      <div className="mt-10 py-10 border-t-2 border-gray-700">
        <div className="cursor-pointer rounded-xl flex gap-2 font-semibold text-xl bg-slate-800 p-3">
          <div>
            <HomeIcon />
          </div>
          <div>dashboard</div>
        </div>

        <div className="mt-5 cursor-pointer rounded-xl flex gap-2 font-semibold text-xl bg-slate-800 p-3">
          <div>
            <PeopleIcon />
          </div>
          <div>Members</div>
        </div>

        <div className="mt-5 cursor-pointer rounded-xl flex gap-2 font-semibold text-xl bg-slate-800 p-3">
          <div>
            <LogoutIcon />
          </div>
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
