class Api::V1:: DrinksController < ApplicationController
  def index
    @drinks = Drink.all
    render json: @drinks, status: :ok
  end

  def create
    @drink = Drink.new(drink_params)
    if @drink.save
      redirect_to admin_drink_path(@drink), notice: 'Drink was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def drink_params
    params.require(:drink).permit(:name, :priceml, :description, :imagepath)
  end
end
