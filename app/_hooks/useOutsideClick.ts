import { useEffect, useRef, RefObject } from "react";

export function useOutsideClick(
  handler: (event: MouseEvent) => void, // Actualizado para aceptar el evento
  listenCapturing = true
): RefObject<any> {
  const ref = useRef<any>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler(e); // Pasamos el evento al handler
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}
