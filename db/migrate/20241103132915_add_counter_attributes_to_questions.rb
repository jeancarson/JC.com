class AddCounterAttributesToQuestions < ActiveRecord::Migration[7.2]
  def change
    add_column :questions, :likes_count, :integer, default: 0
    add_column :questions, :dislikes_count, :integer, default: 0
  end
end
