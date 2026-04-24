function calculateDiscount(price, type) {
  if (type === 'STUDENT') {
    return price * 0.9; // 10% discount
  } else if (type === 'SENIOR') {
    return price * 0.7; // 20% discount
  }
  return price;
}
