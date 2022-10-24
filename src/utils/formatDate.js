export function formatDate(date) {
  return date.toLocaleString('sv').slice(0, 10);
}

export function showDateTime(seconds) {
  let milliseconds = seconds * 1000;
  let date = new Date(milliseconds);

  return date.toLocaleDateString;
}

export function showDateOnly(seconds) {
  let milliseconds = seconds * 1000;
  let date = new Date(milliseconds);
  return new Intl.DateTimeFormat('ko-KR').format(date);
}
