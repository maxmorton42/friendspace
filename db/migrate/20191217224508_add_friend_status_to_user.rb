class AddFriendStatusToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :friend_status, :text
  end
end
