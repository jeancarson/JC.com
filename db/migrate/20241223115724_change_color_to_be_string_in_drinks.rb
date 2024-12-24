class ChangeColorToBeStringInDrinks < ActiveRecord::Migration[7.2]
  def up
    change_column :drinks, :color, :string
  end

  def down
    change_column :drinks, :color, :integer
  end
end
