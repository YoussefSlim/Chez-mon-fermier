export default (product, counter) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const findItem = cart.find((item) => item.id === product.id);

  if (!findItem) {
    localStorage.setItem(
      'cart',
      JSON.stringify([
        ...cart,
        {
          title: product.title,
          id: product.id,
          price_ttc: product.price_ttc,
          description: product.description,
          counter,
        },
      ])
    );
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (product.id === cart[i].id) {
        cart[i].counter += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  }
};
