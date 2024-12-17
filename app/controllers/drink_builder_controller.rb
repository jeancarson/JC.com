class DrinkBuilderController < ApplicationController
  def index
    @drinks = Drink.all
    @drink = Drink.new
  end
end
