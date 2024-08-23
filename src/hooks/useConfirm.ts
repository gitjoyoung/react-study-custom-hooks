export const useConfirm = (
  message: string,
  callback: () => void,
  rejection: () => void
) => {
  const comnfrimAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return comnfrimAction;
};
