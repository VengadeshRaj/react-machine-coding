import Profile from "./Profile";

type MessageType = {
  name: string;
  content: string;
  isOwn: boolean;
};
export default function Message({ name, content, isOwn }: MessageType) {
  const containerStyle = isOwn
    ? "flex flex-row border rounded bg-green-600 w-[300px] m-2"
    : "flex flex-row border rounded bg-blue-600 w-[300px] m-2";
  return (
    <div className={isOwn ? "flex flex-row-reverse" : ""}>
      <div className={containerStyle}>
        <div>
          <Profile />
        </div>
        <div className="flex flex-col gap-2 py-4">
          <div className="font-bold">{name}</div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}
