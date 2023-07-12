const convertToDateArray = (dateStrings: string[]) => {
  const convertedDates = dateStrings.map(dateString => {
    const [year, month, day] = dateString.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  });

  return convertedDates;
};
export default convertToDateArray;