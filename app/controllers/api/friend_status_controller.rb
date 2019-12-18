class Api::FriendStatusController < ApplicationController
  def index
    render json: User.liked(current_user.friend_status)
  end
end