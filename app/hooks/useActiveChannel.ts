import { Channel, Members } from "pusher-js";
import useActiveList from "./useActiveList";
import { useEffect, useState } from "react";
import { pusherClient } from "../libs/pusher";

const useActiveChannel = () => {
  const { set, add, remove } = useActiveList();
  const [activeChannel, setActiveChannel] = useState<Channel | null>(null);

  useEffect(() => {
    let channel = activeChannel;
    // channel name is not important, but required
    if (!channel) {
      channel = pusherClient.subscribe("presence-messenger");
      setActiveChannel(channel);
      // members are of a type Members from pusher
      // Define initial members and push their ids (emails maped in auth.ts)
      // for members you need to use each (special array).
      // initial bind event when we log all the users
      channel.bind("pusher:subscription_succeeded", (members: Members) => {
        const initialMembers: string[] = [];

        members.each((member: Record<string, any>) =>
          initialMembers.push(member.id)
        );
        set(initialMembers);
      });
      // adding a member
      channel.bind("pusher:member_added", (member: Record<string, any>) => {
        add(member.id);
      });
      // removing a member
      channel.bind("pusher:member_removed", (member: Record<string, any>) => {
        remove(member.id);
      });
      // return function to unsubscribe
      return () => {
        if (activeChannel) {
          pusherClient.unsubscribe("presence-messenger");
          setActiveChannel(null);
        }
      };
    }
  }, [activeChannel, set, add, remove]);
};
export default useActiveChannel;
