# app/controllers/payments_controller.rb
class PaymentsController < ApplicationController
  def new
  end
  
  def create
    # Parse the checkout state from the frontend
    checkout_state = JSON.parse(session[:checkout_state] || '{}')
    
    # Calculate total amount in cents
    total_amount = checkout_state.values.sum { |drink| drink['quantity'] * drink['price'] } * 100
    
    # Use the calculated amount or fall back to a minimum amount
    amount = total_amount.positive? ? total_amount.to_i : 500

    customer = Stripe::Customer.create(
      email: params[:stripeEmail],
      source: params[:stripeToken]
    )
    
    charge = Stripe::Charge.create(
      customer: customer.id,
      amount: amount,
      description: 'Buy Jeanie Peanie a drink',
      currency: 'eur'
    )

    flash[:success] = "Thank you for your support!"
    redirect_to root_path

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_payment_path
  rescue JSON::ParserError => e
    flash[:error] = "Invalid checkout state"
    redirect_to new_payment_path
  rescue => e
    flash[:error] = "An error occurred while processing your payment"
    redirect_to new_payment_path
  end
end