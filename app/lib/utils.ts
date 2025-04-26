export const formatPrice = (
  amount: number,
  locale: string = "de-DE"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};
