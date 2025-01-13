import {useRef} from "react";
import LogSlv from "../../common/slv/LogSlv.ts";

export const useLogging = () => {
  const logRef = useRef<LogSlv | null>(null);

  if (!logRef.current) {
    logRef.current = LogSlv.getInstance();
  }
  return logRef.current;
}
