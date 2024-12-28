class CreateDrinks < ActiveRecord::Migration[7.2]
  def change
    create_table :drinks do |t|
      t.string :name
      t.decimal :priceml, precision: 5, scale: 2
      t.timestamps
    end
  end
end
