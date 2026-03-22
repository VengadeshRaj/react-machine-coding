import { useState, useRef } from "react";

type UseDebouncedSearch = [
  inputValue: string,
  suggestions: string[],
  onChange: (input: string) => void,
  reset: (input: string) => void,
];
export default function useDebouncedSearch(
  Records: string[],
): UseDebouncedSearch {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>(Records);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimeOutWithRef = () => {
    if (timerRef?.current) clearTimeout(timerRef.current);
  };

  const onChange = (input: string) => {
    setInputValue(input);
    clearTimeOutWithRef();
    if (input) {
      timerRef.current = setTimeout(() => {
        const newSuggestions = Records.filter((record) =>
          record.toLocaleLowerCase().startsWith(input.toLocaleLowerCase()),
        );

        setSuggestions([...newSuggestions]);
      }, 500);
    } else setSuggestions(Records);
  };

  const reset = (value = "") => {
    setSuggestions([]);
    setInputValue(value);
    clearTimeOutWithRef()
  };

  return [inputValue, suggestions, onChange, reset];
}
