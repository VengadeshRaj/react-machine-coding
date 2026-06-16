import PriceRange from "./components/PriceRange";

const Page = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-green-400 p-5">
      <h2>Price Range</h2>
      <PriceRange />
    </div>
  );
};

export default Page;
