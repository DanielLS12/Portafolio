import { useEffect, useRef, useState } from "react";

function useObserver(options) {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(
    new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options)
  );

  useEffect(() => {
    const currentObserver = observer.current;
    currentObserver.disconnect();
    if (elements.length > 0) {
      elements.forEach((element) => currentObserver.observe(element));
    }
    return function cleanUp() {
      if (currentObserver) currentObserver.disconnect();
    };
  }, [elements]);

  return [observer.current, setElements, entries];
}

export default useObserver;
