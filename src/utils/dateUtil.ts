// YYYY-MM-DD > Date(YYYY, MM-1, DD) list
const convertToDateArray = (dateStrings: string[]) => {
  const convertedDates = dateStrings.map(dateString => {
    const [year, month, day] = dateString.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  });

  return convertedDates;
};
export default convertToDateArray;

// Date(YYYY, MM-1, DD) > YYYY-MM-DD list
export const convertToDateString = (dateArray: Date[]) => {
  const convertedDates = dateArray.map(date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  });
  return convertedDates;
};
// Date(YYYY, MM-1, DD) > YYYY-MM
export const convertToMonthString = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
};