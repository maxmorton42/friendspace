class CreateFriends < ActiveRecord::Migration[6.0]
  def change
    create_table :friends do |t|
      t.string :name
      t.integer :age
      t.string :job
      t.string :avatar


      t.timestamps
    end
  end
end
