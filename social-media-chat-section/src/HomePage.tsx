import { useState } from "react";
import ChatSection from "./components/ChatSection";
import { CHAT_DEFAULT_VALUES } from "./constants";
import ChatModal from "./components/ChatModal";

export type Chat = {
  name: string;
  message: string;
  date: string;
  isOwn: boolean;
};
export type ChatData = {
  chatId: number;
  name: string;
  chats: Chat[];
  recentMessage: string;
  recentChatDate: string;
};
export interface SelectedChat extends ChatData {
  isMessageVisible: boolean;
}

export default function HomePage() {
  const [chatData, setChatData] = useState<ChatData[]>(CHAT_DEFAULT_VALUES);
  const [selectedChats, setSelectedChats] = useState<SelectedChat[]>([]);

  const onChatClick = (chatId: number) => {
    const selectedChat = chatData.filter((c) => c.chatId == chatId);
    const isAlreadySelected = selectedChats?.filter((s) => s.chatId == chatId);
    if (isAlreadySelected?.length) return;

    if (!selectedChats || selectedChats?.length <= 3) {
      const selectedChatObj = { ...selectedChat[0], isMessageVisible: true };
      const newSelectesChats = JSON.parse(JSON.stringify(selectedChats || []));
      setSelectedChats(() => [...newSelectesChats, selectedChatObj]);
    }
  };

  const onChatHeaderClick = (chatId: number) => {
    const newSelectedChats =
      selectedChats?.map((s) => {
        if (s.chatId == chatId) {
          s.isMessageVisible = !s.isMessageVisible;
          return s;
        }
        return s;
      }) || [];
    setSelectedChats([...newSelectedChats]);
  };
  const onChatModalClose = (chatId: number) => {
    const newSelectedChats =
      selectedChats?.filter((s) => s.chatId != chatId) || [];
    setSelectedChats([...newSelectedChats]);
  };

  const buildSelectedChats = () =>
    selectedChats?.map((s) => (
      <ChatModal
        chatId={s.chatId}
        name={s.name}
        isMessageVisible={s.isMessageVisible}
        onModalHeaderClick={() => onChatHeaderClick(s.chatId)}
        onCloseClick={() => onChatModalClose(s.chatId)}
        messages={s.chats}
      />
    ));

  return (
    <div className="relative flex flex-col bg-gray-100 items-center h-screen justify-center">
      <div className="font-bold text-xl">Newsfeed will flow here..</div>
      <div className="absolute bottom-0 right-1 flex flex-row items-end">
        <div className="self-end flex flex-row gap-1 items-end">
          {buildSelectedChats()}
        </div>
        <ChatSection
          chatData={chatData}
          onChatClick={(id: number) => onChatClick(id)}
        />
      </div>
    </div>
  );
}
