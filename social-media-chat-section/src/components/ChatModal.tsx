import { Chat } from "../HomePage";
import CloseButton from "./CloseButton";
import Message from "./Message";
import NewMessageInput from "./NewMessageInput";
import Profile from "./Profile";

type ChatModal = {
  chatId: number;
  name: string;
  isMessageVisible: boolean;
  onModalHeaderClick: () => void;
  onCloseClick: () => void;
  messages: Chat[];
};

export default function ChatModal(props: ChatModal) {
  const { chatId, name, isMessageVisible, messages, onModalHeaderClick,onCloseClick } =
    props;

  const buildMessages = () =>
    messages.map((m) => (
      <div>
        {
          <Message
            name={!m.isOwn && m.name ? m.name : "You"}
            content={m.message}
            isOwn={m.isOwn}
          />
        }
      </div>
    ));

  return (
    <div className="relative bottom-0 right-1 bg-gray-900 text-white w-[450px] rounded-t-lg">
      <div
        className="flex w-full hover:bg-gray-800 cursor-pointer rounded-t-lg border-b border-white/50"
        onClick={() => onModalHeaderClick()}
      >
        <Profile />
        <div className="py-5">{name}</div>
        <span className="p-3 ml-auto">
          <CloseButton onClick={() => onCloseClick()} />
        </span>
      </div>
      {isMessageVisible && (
        <div>
          <div>
            {buildMessages()}
            <NewMessageInput />
          </div>
        </div>
      )}
    </div>
  );
}
