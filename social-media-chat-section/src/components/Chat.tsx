import Profile from "./Profile";

type ChatProps = {
  name: string;
  recentChatDate: string;
  recentMessage: string;
  chatId:number;
  onClick:(chatId:number)=>void;
};

export default function Chat({
  name,
  recentChatDate,
  recentMessage,
  chatId,
  onClick
}: ChatProps) {
  return (
    <div className="flex flex-row border-b border-white/50 hover:bg-gray-800 cursor-pointer" onClick={()=> onClick(chatId)}>
      <Profile />
      <div className="py-3 flex-1">
        <div className="flex flex-row justify-between">
          <div>{name}</div>
          <div className="text-gray-500 px-2">{recentChatDate}</div>
        </div>
        <div className="text-gray-500">{recentMessage}</div>
      </div>
    </div>
  );
}
