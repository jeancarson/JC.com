class CreateCountDownGameScores < ActiveRecord::Migration[7.2]
  def up
    create_table :count_down_game_scores do |t|
      t.string :initials, limit: 3, null: false
      t.float :score, null: false

      t.timestamps
    end

    add_index :count_down_game_scores, :initials, unique: true
  end

  def down
    remove_index :count_down_game_scores, :initials # Fix table name here
    drop_table :count_down_game_scores
  end
end
