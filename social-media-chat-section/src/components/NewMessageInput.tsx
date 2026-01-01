export default function NewMessageInput() {
  return (
    <form className="flex flex-col gap-1">
      <div className="border-b border-white/50 p-2">
        <textarea
          className="w-full border bg-gray-700 rounded resize-none p-2 h-[200px]"
          placeholder="Write a message here..."
        />
      </div>
      <div className="flex flex-row-reverse p-2">
        <button type="submit" className="bg-blue-700 px-4 py-1 rounded-full">
          Send
        </button>
      </div>
    </form>
  );
}
