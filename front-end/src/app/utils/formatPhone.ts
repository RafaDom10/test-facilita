export function formatPhone (event: React.FormEvent<HTMLInputElement>) {
  event.currentTarget.maxLength = 15;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})\B/, '($1) ');
  value = value.replace(/(\d{1})?(\d{4})(\d{4})/, '$1$2-$3');
  event.currentTarget.value = value;
  return event;
}
