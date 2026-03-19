"use client";

import { ArrowUpRight } from "lucide-react";

const avatarRow1 = [
  { type: "photo", src: "https://i.pravatar.cc/28?u=p1" },
  { type: "photo", src: "https://i.pravatar.cc/28?u=p2" },
  { type: "photo", src: "https://i.pravatar.cc/28?u=p3" },
  { type: "initial", initials: "R" },
  { type: "initial", initials: "FJ" },
  { type: "initial", initials: "S" },
];

const avatarRow2 = [
  { type: "photo", src: "https://i.pravatar.cc/28?u=p4" },
  { type: "photo", src: "https://i.pravatar.cc/28?u=p5" },
  { type: "initial", initials: "JJ" },
  { type: "initial", initials: "QV" },
  { type: "photo", src: "https://i.pravatar.cc/28?u=p6" },
  { type: "photo", src: "https://i.pravatar.cc/28?u=p7" },
  { type: "initial", initials: "IU" },
];

const renderAvatar = (avatar, i) => {
  if (avatar.type === "photo") {
    return (
      <img
        key={i}
        src={avatar.src}
        alt="user avatar"
        width={28}
        height={28}
        className="rounded-full border-2 border-white object-cover w-7 h-7 flex-shrink-0"
      />
    );
  }
  return (
    <div
      key={i}
      className="w-7 h-7 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white font-semibold flex-shrink-0"
      style={{ fontSize: "8px" }}
    >
      {avatar.initials}
    </div>
  );
};

export default function StatsCard() {
  return (
    <div className="bg-orange-500 p-6 flex justify-center items-center min-h-screen">
     
      <div className="w-[239px] h-[252px] bg-white rounded-[10px] p-5 flex flex-col shadow-md">
      
        <div className="flex justify-between items-start">
          <h2 className="text-[26px] font-semibold text-[#0B1B3F]">
            30,000+
          </h2>
          <ArrowUpRight className="text-green-500 w-6 h-6 mt-1" />
        </div>

        <p className="text-[12px] text-gray-400 mt-2 leading-relaxed">
          Blood test in July 2025 with 5 star ratings and happy clients.
        </p>

    
        <div className="h-[1px] bg-orange-400 mt-4 w-full"></div>
 
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex -space-x-2">
            {avatarRow1.map((avatar, i) => renderAvatar(avatar, i))}
          </div>
          <div className="flex -space-x-2">
            {avatarRow2.map((avatar, i) => renderAvatar(avatar, i))}
          </div>
        </div>
      </div>
    </div>
  );
}
