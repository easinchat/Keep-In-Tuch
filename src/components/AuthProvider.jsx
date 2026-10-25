"use client";

import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [calls, setCalls] = useState([]);
  console.log("This is calls data", calls);

  const addActivity = (friend, action) => {
    const icons = {
      call: "/call.png",
      message: "/text.png",
      video: "/video.png",
    };

    const newActivity = {
      id: crypto.randomUUID(),
      friendId: friend.id,
      friendName: friend.name,
      friendPicture: friend.picture,
      action,
      icon: icons[action],
      createdAt: new Date().toISOString(),
    };
    setCalls([...calls, newActivity]);
  };

  const userInfo = { addActivity, setCalls, calls };
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
