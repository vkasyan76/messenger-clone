"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();
  // hide the mobile footer if the conversation is going on
  // at the bottom we want to have conversation form and not the mobile footer
  if (isOpen) {
    return null;
  }

  return (
    <div
      // fixed utility to position an element relative to the browser window
      className="fixed justify-between w-full bottom-0 z-40 flex 
      items-center bg-white border-t-[1px] lg:hidden"
    >
      {routes.map((route) => (
        <MobileItem
          key={route.href}
          href={route.href}
          active={route.active}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
