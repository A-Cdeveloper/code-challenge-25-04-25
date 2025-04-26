export const formatPrice = (
  amount: number,
  locale: string = "de-DE"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};

export const formatCategoryName = (input: string) =>
  decodeURIComponent(input)
    .split(" ")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
