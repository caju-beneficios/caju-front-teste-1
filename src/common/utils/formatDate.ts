export function formatDate(date: string) {
  const [year, month, day] = date.substring(0, 10).split("-");

  return `${day}/${month}/${year}`;
}
