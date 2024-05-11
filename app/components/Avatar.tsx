"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user?: User;
}
const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative">
      <div
        //   inline-block will wrap the element to prevent the text inside from extending beyond its parent.
        // overflow-hidden utility to clip any content within an element that overflows the bounds of that element.
        className="relative inline-block rounded-full
        overflow-hidden h-9 w-9 md:h-11 md:w-11"
      >
        {/* PLACEHOLDER IMAGE */}
        <Image
          alt="Avatar"
          src={user?.image || "/images/placeholder.jpg"}
          fill
        />
      </div>
      <span
        className="absolute block rounded-full bg-green-500 ring-2 ring-white
          top-0 right-0  h-2 w-2 md:h-3 md:w-3"
      />
    </div>
  );
};

export default Avatar;
