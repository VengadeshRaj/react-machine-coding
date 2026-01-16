import { useState, useEffect } from "react";
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
  const [overAllChatData, setOverAllChatData] = useState(CHAT_DEFAULT_VALUES);
  const [chatData, setChatData] = useState<ChatData[]>([]);
  const [selectedChats, setSelectedChats] = useState<SelectedChat[]>([]);

  useEffect(() => {
    setChatData(overAllChatData);
  }, []);

  const getModalOpenConfig = (modalCount: number) => {
    if (modalCount < 3) return 3;
    else if (modalCount == 3) return 2;
    else return 1;
  };

  const applyChatOpenConfig = (newSelectedChats: SelectedChat[]) => {
    const noOfModalAllowed = getModalOpenConfig(selectedChats.length);
    const chats = newSelectedChats.map((c, i) => {
      if (i < noOfModalAllowed) {
        c.isMessageVisible = true;
      } else c.isMessageVisible = false;
      return c;
    });

    setSelectedChats([...chats]);
  };

  const onChatClick = (chatId: number) => {
    const selectedChat = chatData.filter((c) => c.chatId == chatId);
    const isAlreadySelected = selectedChats?.filter((s) => s.chatId == chatId);
    if (isAlreadySelected?.length) return;
    const updatedChats = [
      { ...selectedChat[0], isMessageVisible: true },
      ...selectedChats,
    ];
    if (updatedChats.length > 5) updatedChats.pop();

    applyChatOpenConfig(updatedChats);
  };

  const onChatHeaderClick = (chatId: number) => {
    const noOfModalAllowed = getModalOpenConfig(selectedChats.length + 1);
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
    <div className="relative flex flex-col bg-gray-100 items-center h-screen justify-center text-sm">
      <div className="font-bold text-xl">News feed will flow here...</div>
      <div className="absolute bottom-0 right-1 flex flex-row items-end">
        <div className="self-end flex flex-row gap-1 items-end">
          {buildSelectedChats()}
        </div>
        <ChatSection
          overAllChatData={overAllChatData}
          chatData={chatData}
          onChatClick={(id: number) => onChatClick(id)}
          setChatData={setChatData}
        />
      </div>
    </div>
  );
}
