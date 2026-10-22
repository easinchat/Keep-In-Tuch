import FriendsCard from "@/components/FriendsCard";
import React from "react";

const FriendsPage = async () => {
  const friendsPromise = await fetch("http://localhost:3000/friends.json");
  const friends = await friendsPromise.json();

  return (
    <div>
      <h2>Friends</h2>
      <div className="grid grid-cols-3 gap-5">
        {friends.map((friend) => (
          <FriendsCard friend={friend} key={friend.id}></FriendsCard>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
