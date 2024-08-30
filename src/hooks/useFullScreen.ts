import { useRef } from "react";

interface UseFullScreenReturn {
  element: React.RefObject<HTMLDivElement>;
  triggerFull: () => void;
  exitFull: () => void;
}

export const useFullScreen = (
  callback: (isFull: boolean) => void
): UseFullScreenReturn => {
  const element = useRef<HTMLDivElement>(null);

  const triggerFull = () => {
    if (element.current) {
      const elem = element.current as HTMLDivElement & {
        mozRequestFullScreen?: () => void;
        webkitRequestFullscreen?: () => void;
        msRequestFullscreen?: () => void;
      };

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }

      callback(true);
    }
  };

  const exitFull = () => {
    const doc = document as Document & {
      mozCancelFullScreen?: () => Promise<void>;
      webkitExitFullscreen?: () => Promise<void>;
      msExitFullscreen?: () => Promise<void>;
    };

    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    }

    callback(false);
  };

  return { element, triggerFull, exitFull };
};
