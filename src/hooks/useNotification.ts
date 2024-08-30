export const useNotification = (
  title: string,
  options?: NotificationOptions
) => {
  if (!("Notification" in window)) {
    return;
  } // 브라우저에서 Notification 을 지원하지 않으면 return
  const notify = () => {
    if (Notification.permission !== "granted") {
      // 알람 승인이 안되어 있다면
      Notification.requestPermission().then((permission) => {
        // 알람 권한을 요청한다
        if (permission !== "granted") {
          return; // 알람 권한이 거절 되었다면 return
        }
        new Notification(title, options); // notification 생성
      });
    } else {
      new Notification(title, options);
    }
  };

  return notify;
};
