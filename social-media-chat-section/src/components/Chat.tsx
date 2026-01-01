import Profile from "./Profile";

type ChatProps = {
  name: string;
  recentChatDate: string;
  recentMessage: string;
};

export default function Chat({
  name,
  recentChatDate,
  recentMessage,
}: ChatProps) {
  return (
    <div className="flex flex-row">
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
