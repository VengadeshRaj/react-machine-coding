import { useState } from "react";
import ArrowButton from "./ArrowButton";
import Chat from "./Chat";
import Profile from "./Profile";

type chat = {
  message: string;
  date: string;
  isOwn: boolean;
};
type ChatData = {
  name: string;
  chats: chat[];
  recentMessage: string;
  recentChatDate: string;
};

export default function ChatSection() {
  const [chatData, setChatData] = useState<ChatData[]>([
    {
      name: "Vengadesh Raj",
      chats: [
        {
          message: "Hey there..",
          date: "Dec 28, 2025",
          isOwn: false,
        },
      ],
      recentMessage: "Hey there..",
      recentChatDate: "Dec 28, 2025",
    },
  ]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const buildChatData = () =>
    chatData.map((c) => (
      <Chat
        name={c.name}
        recentChatDate={c.recentChatDate}
        recentMessage={c.recentMessage}
      />
    ));

  return (
    <div className="absolute bottom-0 right-1 bg-gray-900 text-white w-[450px] rounded-t-lg">
      <div
        className="flex w-full hover:bg-gray-800 cursor-pointer rounded-t-lg border-b border-white/50"
        onClick={() => setIsChatOpen((prev) => !prev)}
      >
        <Profile />
        <div className="py-5">Messaging</div>
        <span className="p-3 ml-auto">
          <ArrowButton
            isOpen={isChatOpen}
            onClick={() => setIsChatOpen((prev) => !prev)}
          />
        </span>
      </div>
      {isChatOpen && <div>{buildChatData()}</div>}
    </div>
  );
}
