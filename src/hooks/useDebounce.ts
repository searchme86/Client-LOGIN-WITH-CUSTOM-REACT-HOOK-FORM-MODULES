export const useDebounce = (callback: (args: any) => void) => {
  let timeOutID: number | undefined;

  return (args: any) => {
    clearTimeout(timeOutID);

    setTimeout(() => callback(args), 1000);
  };
};
