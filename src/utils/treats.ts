const treatDate = (date: string): string => {
  const dateString = date.split('-');

  if (dateString.length > 2) {
    return `${dateString[2]}/${dateString[1]}/${dateString[0]}`;
  }

  return '';
};

export {
  treatDate,
};
