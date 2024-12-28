class AddDescriptionAndImagepathToTableName < ActiveRecord::Migration[7.2]
  def change
    add_column :drinks, :description, :string
    add_column :drinks, :imagepath, :string
  end
end
