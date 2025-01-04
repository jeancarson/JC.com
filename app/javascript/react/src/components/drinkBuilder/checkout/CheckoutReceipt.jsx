import React from 'react';
import ReactDOM from 'react-dom/client';
import './checkout-receipt-styles.css';

const CheckoutReceipt = ({ drinks }) => {
  const totalAmount = Object.values(drinks).reduce(
    (acc, drink) => acc + drink.price * drink.quantity,
    0
  );

  return (
    <div className="receipt-wrapper">
      <div className="receipt-container">
        <img
          src="/images/receipt.png"
          alt="receipt"
          className="receipt-image"
        />
        <div className="receipt-content">
          <div className="receipt-items-section">
            <div className="receipt-details">
              <div className="items-column">
                {Object.entries(drinks).map(([drinkName, drink]) => (
                  <div key={drinkName} className="receipt-item">
                    {drinkName} x {drink.quantity}ml
                  </div>
                ))}
              </div>
              <div className="prices-column">
                {Object.entries(drinks).map(([drinkName, drink]) => (
                  <div key={drinkName} className="receipt-price">
                    €{(drink.price * drink.quantity).toFixed(2)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="receipt-total-section">
            <div className="total-row">
              <span>Total:</span>
              <span>€{totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const checkoutReceiptElement = document.getElementById(
    'drinks-checkout-receipt'
  );
  if (checkoutReceiptElement) {
    // Get data from sessionStorage instead of data attribute
    const drinks = JSON.parse(sessionStorage.getItem('checkoutState') || '{}');
    console.log('Checkout drinks:', drinks);

    const checkoutReceiptRoot = ReactDOM.createRoot(checkoutReceiptElement);
    checkoutReceiptRoot.render(
      <React.StrictMode>
        <CheckoutReceipt drinks={drinks} />
      </React.StrictMode>
    );
  }
});

export default CheckoutReceipt;
