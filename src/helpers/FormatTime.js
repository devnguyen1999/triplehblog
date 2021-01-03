export const FormatTime = (time) => {
  const d = new Date(time);
  const result = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
  return result;
};