export function formatDate(dateValue: string): string {
  const date = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateValue;

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

export function isUpcoming(dateValue: string): boolean {
  const eventDate = new Date(`${dateValue}T23:59:59`);
  const now = new Date();
  return eventDate.getTime() >= now.getTime();
}
