// CartStore.js
import { makeObservable, observable, action } from 'mobx';

class CartStore {
  cartItems = [];

  constructor() {
    makeObservable(this, {
      cartItems: observable,
      addToCart: action,
    });
  }

  addToCart(item) {
    this.cartItems.push(item);
  }
}

const cartStore = new CartStore();

export default cartStore;
