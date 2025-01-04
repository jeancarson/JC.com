// document.addEventListener('DOMContentLoaded', () => {
//   // Retrieve state from sessionStorage
//   const state = JSON.parse(sessionStorage.getItem('checkoutState'));

//   if (state) {
//     // Calculate the total amount in cents
//     const totalAmount = Object.values(state).reduce(
//       (acc, drink) => acc + drink.quantity * drink.price,
//       0
//     );
//     // Convert to cents (Stripe requires amounts in the smallest currency unit)
//     const totalCents = Math.round(totalAmount * 100);

//     // Update the display amount
//     const amountLabel = document.querySelector('.amount span');
//     if (amountLabel) {
//       amountLabel.textContent = `Amount: $${(totalCents / 100).toFixed(2)}`;
//     }

//     // Remove the existing Stripe button
//     const oldButton = document.querySelector('.stripe-button-el');
//     if (oldButton) {
//       oldButton.remove();
//     }

//     // Remove the existing Stripe script
//     const oldScript = document.querySelector('.stripe-button');
//     if (oldScript) {
//       oldScript.remove();
//     }

//     // Create and append new Stripe script with updated amount
//     const form = document.querySelector('form');
//     const script = document.createElement('script');
//     script.src = 'https://checkout.stripe.com/checkout.js';
//     script.className = 'stripe-button';
//     script.dataset.key = '<%= Rails.configuration.stripe[:publishable_key] %>'; // You'll need to ensure this is properly set
//     script.dataset.description = 'Purchase your drinks';
//     script.dataset.amount = totalCents;
//     script.dataset.locale = 'auto';

//     // Add custom styling to match your theme
//     script.dataset.buttonClass = 'custom-stripe-button';
//     script.dataset.panelLabel = 'Pay {{amount}}';
//     script.dataset.currency = 'eur';

//     if (form) {
//       form.appendChild(script);
//     }
//   }
// });

// // Add some basic styling for the new button
// const style = document.createElement('style');
// style.textContent = `
//     .custom-stripe-button {
//       background: #32325d;
//       color: white;
//       padding: 8px 12px;
//       border: 0;
//       border-radius: 4px;
//       font-size: 1em;
//       cursor: pointer;
//       transition: all 0.2s ease;
//     }
//     .custom-stripe-button:hover {
//       background: #43458b;
//     }
//   `;
// document.head.appendChild(style);
