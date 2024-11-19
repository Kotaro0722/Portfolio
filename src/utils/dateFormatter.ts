export const date2YearMonthString = (date: Date) => {
  return `${date.getFullYear()}/${date.getMonth() + 1}`;
};
