const changeFormatDate = (visitingDate: any) => {
  const date = new Date(visitingDate);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat('id-ID', {month: 'long'}).format(date);
  const year = date.getFullYear();
  const newDate = `${day} ${month} ${year}`;
  return newDate;
};

export default changeFormatDate;
