class  DrinkBuilderController < ApplicationController
  def index
    @drinks = Drink.all
  end


end
  
