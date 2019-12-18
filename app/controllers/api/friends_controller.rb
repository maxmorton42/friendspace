class Api::FriendsController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: User.random_friend(current_user.friend_status)
  end

  def create
    friend = Friend.new(friend_params)
    if friend.save
      render json: friend
    else
      render json: {}
    end
  end

  def update
    current_user.friend_status << params[:id].to_i
    current_user.save
  end

  private
  def friend_params
    params.require(:friend).permit(:name, :age, :job, :avatar)
  end
end

