const PriceRange = () => {
  return (
    <div className="w-[100%] relative">
      <div className="bg-gray-300 h-2 rounded" />
      <div className="absolute w-[15px] h-2 bg-blue-700 rounded-full cursor-pointer" draggable/>
    </div>
  );
};

export default PriceRange;
