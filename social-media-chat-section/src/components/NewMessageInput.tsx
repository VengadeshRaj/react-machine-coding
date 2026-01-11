export default function NewMessageInput() {
  const onMessageSubmit = (e: any) => {
    e.preventDefault();
    console.log()
  };
  return (
    <form className="flex flex-col gap-1" onSubmit={(e) => onMessageSubmit(e)}>
      <div className="border-b border-white/50 p-2">
        <input name="new-message" className="w-full border bg-gray-700 rounded resize-none p-2 h-[200px]" />
      </div>
      <div className="flex flex-row-reverse p-2">
        <button
          type="submit"
          className="bg-blue-700 px-4 py-1 rounded-full font-medium hover:bg-blue-800"
          onClick={(e) => onMessageSubmit(e)}
        >
          Send
        </button>
      </div>
    </form>
  );
}
