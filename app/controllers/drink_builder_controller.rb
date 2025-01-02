class  DrinkBuilderController < ApplicationController
  def index
    @drinks = Drink.all
  end
  def checkout
  end

end
  
