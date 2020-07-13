export const getDateTimeMin = (): number => {
  return new Date().getTime();
};

export const setDateTimeMinForward = (forwardMinutes: number): number => {
  return new Date().setMinutes(new Date().getMinutes() + forwardMinutes);
};
