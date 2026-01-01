import ChatSection from "./components/ChatSection";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-gray-100 items-center h-screen justify-center">
      <div className="font-bold text-xl">Newsfeed will flow here..</div>
      <ChatSection />
    </div>
  );
}
