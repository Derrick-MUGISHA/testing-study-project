const formatPrice = (price: number, currencyId: string): string => {
  const locale = currencyId === 'BRL' ? 'pt-BR' : 'en-US';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyId
  })
    .format(price)
    .replace(/[^\d,.-]/g, '');
};

export default formatPrice;
