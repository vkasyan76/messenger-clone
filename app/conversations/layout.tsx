import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./[conversationId]/components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    <div>
      <Sidebar>
        <div className="h-full">
          <ConversationList initialItems={conversations} />
          {children}
        </div>
      </Sidebar>
    </div>
  );
}
