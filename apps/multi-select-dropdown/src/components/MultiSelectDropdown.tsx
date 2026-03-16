type MultiSelectDropdownTyep = {
  title: string;
};

const MultiSelectDropdown = (props: MultiSelectDropdownTyep) => {
  const { title } = props;
  return (
    <div className="flex flex-row gap-5 font-medium">
      <label className="text-2xl">{title + ""}</label>
      <div className="flex flex-row border border-2 border-black rounded">
        <input />
        <button className="p-2">↓</button>
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
