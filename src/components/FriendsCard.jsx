import React, { use } from "react";

const FriendsCard = ({ friend }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 text-center shadow-md">
        {/* ছবি */}
        <img
          src={friend.picture}
          alt={friend.name}
          className="h-20 w-20 rounded-full object-cover"
        />

        {/* নাম */}
        <h3 className="text-lg font-semibold text-gray-800">{friend.name}</h3>

        {/* কতদিন আগে */}
        <p className="text-sm text-gray-500">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-1">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium uppercase text-green-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status badge */}
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium text-white ${
            friend.status === "overdue"
              ? "bg-red-500"
              : friend.status === "almost due"
                ? "bg-orange-400"
                : "bg-green-600"
          }`}
        >
          {friend.status === "overdue"
            ? "Overdue"
            : friend.status === "almost due"
              ? "Almost Due"
              : "On-Track"}
        </span>
      </div>
    </div>
  );
};

export default FriendsCard;
