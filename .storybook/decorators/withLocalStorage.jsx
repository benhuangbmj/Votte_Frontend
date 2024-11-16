import { useEffect, useState } from "react";
import mockLocalStorage from "../utils/mockLocalStorage";

export default function withLocalStorage(
  Story,
  { args: { localStorageMock } },
) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (typeof localStorageMock === "object") {
      mockLocalStorage(localStorageMock);
    }
    setLoaded(true);
  }, [localStorageMock]);

  return loaded && <Story />;
}
