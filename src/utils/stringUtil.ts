const formatPhoneNumber = (phoneNumber: string) => {
  const areaCode = phoneNumber.slice(0, 3);
  const middlePart = phoneNumber.slice(3, 7);
  const lastPart = phoneNumber.slice(7);

  return `${areaCode}-${middlePart}-${lastPart}`;
}
export default formatPhoneNumber;
