import { useRef, useState } from "react";
import ArrowButton from "./ArrowButton";
import Chat from "./Chat";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
import { ChatData } from "../HomePage";

type ChatSection = {
  chatData: ChatData[];
  onChatClick: (chatId: number) => void;
  setChatData: (chat: ChatData[]) => void;
};

export default function ChatSection({
  chatData,
  onChatClick,
  setChatData,
}: ChatSection) {
  const timeRef: any = useRef(null);
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

  const onSearchCommit = (searchValue: string) => {
    if (timeRef.current) clearTimeout(timeRef.current);

    timeRef.current = setTimeout(() => {
      const similarChats = chatData.reduce((acc: any, value, i) => {
        const chats =  value.chats.map((c) =>
          c.message
            .toLocaleLowerCase()
            .startsWith(searchValue.toLocaleLowerCase())
        );
        if(chats.length >0) acc.push(value.chatId)
        return acc;
      },[]);

      const suggestions = chatData.filter((c) => similarChats.includes(c.chatId));
      setChatData([...suggestions]);
    }, 3000);
  };

  return (
    <div className="bg-gray-900 text-white w-[300px] rounded-t-lg">
      <div
        className="flex w-full hover:bg-gray-800 cursor-pointer rounded-t-lg border-b border-white/50"
        onClick={() => setIsChatOpen((prev) => !prev)}
      >
        <Profile />
        <div className="py-5 font-bold">Messaging</div>
        <span className="p-3 ml-auto">
          <ArrowButton
            isOpen={isChatOpen}
            onClick={() => setIsChatOpen((prev) => !prev)}
          />
        </span>
      </div>
      {isChatOpen && (
        <div>
          <SearchBox onChange={(value)=>onSearchCommit(value)}/>
          {buildChatData()}
        </div>
      )}
    </div>
  );
}
