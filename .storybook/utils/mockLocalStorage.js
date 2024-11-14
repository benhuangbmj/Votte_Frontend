const mockLocalStorage = (mock) => {
  Object.entries(mock).forEach(([key, value]) => {
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  });
};

export default mockLocalStorage;
