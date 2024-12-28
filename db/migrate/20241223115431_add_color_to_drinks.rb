class AddColorToDrinks < ActiveRecord::Migration[7.2]
  def change
    add_column :drinks, :color, :integer
  end
end
