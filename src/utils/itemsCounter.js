const itemsCounter = (htmlElement) => {
  if (htmlElement) {
    return htmlElement.childElementCount;
  }
  return null;
};

export default itemsCounter;
