import { useState } from "react";
import ArrowButton from "./ArrowButton";
import Chat from "./Chat";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
import { ChatData } from "../HomePage";

type ChatSection = {
  chatData: ChatData[];
  onChatClick :(chatId:number)=> void;
};

export default function ChatSection({ chatData,onChatClick }: ChatSection) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const buildChatData = () =>
    chatData.map((c) => (
      <Chat
        name={c.name}
        recentChatDate={c.recentChatDate}
        recentMessage={c.recentMessage}
        chatId={c.chatId}
        onClick={(id) => onChatClick(id)}
      />
    ));

  return (
    <div className="bg-gray-900 text-white w-[450px] rounded-t-lg">
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
      {isChatOpen && (
        <div>
          <SearchBox />
          {buildChatData()}
        </div>
      )}
    </div>
  );
}
