import FriendsCard from "@/components/FriendsCard";
import React from "react";
import friends from "@/app/data/friends.json";
const FriendsPage = async () => {
  // const friendsPromise = await fetch("http://localhost:3000/friends.json");
  // const friends = await friendsPromise.json();
  console.log(friends);

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
