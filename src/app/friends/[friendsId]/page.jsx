import Buttons from "@/components/Buttons";
import friends from "@/app/data/friends.json";
const FriendsDetails = async ({ params }) => {
  const { friendsId } = await params;
  // const friendsPromise = await fetch(`http://localhost:3000/friends.json`);
  // const Details = await friendsPromise.json();
  const friend = friends.find((Detail) => Detail.id === parseInt(friendsId));

  return (
    <div className="flex justify-evenly gap-10 mt-10 max-w-7xl mx-auto">
      {/* first clm */}
      <div className="justify-center items-center flex flex-col gap-5 w-1/2">
        <div className="flex flex-col items-center gap-2 rounded-xl w-full bg-white p-6 text-center shadow-md">
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
        <div className="space-y-5 ">
          <button className="btn  btn-wide  ">Wide</button>
          <button className="btn btn-wide">Wide</button>
          <button className="btn btn-wide">Wide</button>
        </div>
      </div>
      {/* second clm */}
      <div className="flex flex-col gap-5 ">
        {/* //////////////////// */}
        <div className="flex gap-5">
          <div className=" px-12 py-5 bg-amber-50 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-700">10</h3>
            <p className=" text-gray-500">Total Friends</p>
          </div>
          <div className=" px-12 py-5 bg-amber-50 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-700">10</h3>
            <p className=" text-gray-500">Total Friends</p>
          </div>
          <div className=" px-12 py-5 bg-amber-50 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-700">10</h3>
            <p className=" text-gray-500">Total Friends</p>
          </div>
        </div>
        {/* /////////////////////////////// */}
        <div className=" px-12 py-5 bg-amber-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-700">10</h3>
          <p className=" text-gray-500">Total Friends</p>
        </div>
        {/* /////////////// */}
        <div>
          <Buttons friend={friend}></Buttons>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;

// <div>
//   <div className="">
//     <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 text-center shadow-md">
//       {/* ছবি */}
//       <img
//         src={friend.picture}
//         alt={friend.name}
//         className="h-20 w-20 rounded-full object-cover"
//       />

//       {/* নাম */}
//       <h3 className="text-lg font-semibold text-gray-800">{friend.name}</h3>

//       {/* কতদিন আগে */}
//       <p className="text-sm text-gray-500">
//         {friend.days_since_contact}d ago
//       </p>

//       {/* Tags */}
//       <div className="flex flex-wrap justify-center gap-1">
//         {friend.tags.map((tag) => (
//           <span
//             key={tag}
//             className="rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium uppercase text-green-700"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       {/* Status badge */}
//       <span
//         className={`rounded-full px-3 py-1 text-xs font-medium text-white ${
//           friend.status === "overdue"
//             ? "bg-red-500"
//             : friend.status === "almost due"
//               ? "bg-orange-400"
//               : "bg-green-600"
//         }`}
//       >
//         {friend.status === "overdue"
//           ? "Overdue"
//           : friend.status === "almost due"
//             ? "Almost Due"
//             : "On-Track"}
//       </span>
//     </div>
//   </div>

// </div>
