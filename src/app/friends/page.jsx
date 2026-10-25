import FriendsCard from "@/components/FriendsCard";
import React from "react";
import friends from "../data/friend.json";

const FriendsPage = async () => {
  // const friendsPromise = await fetch(
  //  '
  // );
  // const friends = await friendsPromise.json();

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
