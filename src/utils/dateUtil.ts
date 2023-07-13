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
// 올해인 경우) 2023-07-13 > 07.13.(목)
// 올해가 아닐 경우) 2022-07-13 > 22.07.13.(수)
export const formatPeriodDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const options: Intl.DateTimeFormatOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short'
  };
  const formattedDate: string = date.toLocaleDateString('ko-KR', options);
  if (year === new Date().getFullYear()) {
    return formattedDate.replace(/\./g, '.');
  } else {
    return formattedDate.replace(/\./g, '.').replace(/-../, `.${year}`);
  }
};