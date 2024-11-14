import { useEffect } from "react";
import mockLocalStorage from "../utils/mockLocalStorage";

export default function withLocalStorage(
  Story,
  { args: { localStorageMock } }
) {
  useEffect(() => {
    if (typeof localStorageMock === "object") {
      mockLocalStorage(localStorageMock);
    }
  }, [localStorageMock]);

  return <Story />;
}
