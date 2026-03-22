import React, { useState } from "react";
import MultiSelect from "./components/MultiSelectDropdown";

const App: React.FC = () => {
  const MULTISELECT_OPTIONS = [
    "India",
    "America",
    "Sri Lanka",
    "Cannada",
    "Australia",
    "London",
  ];

  return (
    <div className="flex flex-row h-screen items-center justify-center">
      <MultiSelect title="Select any country" options={MULTISELECT_OPTIONS} />
    </div>
  );
};

export default App;
