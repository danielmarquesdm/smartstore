export default function FormatPrice(price) {
  const formattedPrice = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return formattedPrice;
}
