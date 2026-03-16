type MultiSelectDropdownTyep = {
  title: string;
};

const MultiSelectDropdown = (props: MultiSelectDropdownTyep) => {
  const { title } = props;
  return (
    <div className="flex flex-row gap-5 font-medium">
      <label className=" text-2xl">{title + ""}</label>
      <div className="border border-2 border-black rounded">
        <input />
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
