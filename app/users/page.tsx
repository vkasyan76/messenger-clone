// "use client";

// import { signOut } from "next-auth/react";
import EmptyState from "../components/EmptyState";

const Users = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      {/* <button onClick={() => signOut()}>Logout</button> */}
      <EmptyState />
    </div>
  );
};

export default Users;
