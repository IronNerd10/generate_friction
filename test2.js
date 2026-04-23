function calculateDiscount(price, type) {
  if (type === 'STUDENT') {
    return price * 0.8; // 20% discount
  } else if (type === 'SENIOR') {
    return price * 0.7; // 30% discount
  }
  return price;
}
