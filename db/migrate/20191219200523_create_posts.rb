class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :description
      t.belongs_to :friend, null: false, foreign_key: true

      t.timestamps
    end
  end
end
