export default function SearchableTextBox() {
  return (
    <div className="flex flex-col gap-5 items-center h-screen justify-center bg-gray-200">
      <h1 className="font-bold text-3xl text-orange-500">
        Search Any Fruit! 🍍🥭🍎🍉
      </h1>
      <div>
        <input className="border border-gray-800 w-[300px] p-1 rounded" />
        <ul className="bg-white p-2 mt-1 bg-gray-100">
          <li className="focus:bg-blue-400 p-2 border">Test</li>
          <li>Test</li>
        </ul>
      </div>
    </div>
  );
}
