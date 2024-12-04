export const saveState = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadState = (key, defaultValue) => {
  const state = localStorage.getItem(key);
  return state ? JSON.parse(state) : defaultValue;
};
