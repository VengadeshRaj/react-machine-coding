import { useState } from "react";

export default function useAccordianActions(): [
  status: "OPEN" | "CLOSE",
  click: () => void,
] {
  const [status, setStatus] = useState<"OPEN" | "CLOSE">("CLOSE");

  const click = () => {
    setStatus((prev) => (prev === "OPEN" ? "CLOSE" : "OPEN"));
  };

  return [status, click];
}
