class Api::FriendsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_friend, only: [:destroy ]
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

  def destroy
    render json: @friend.destroy
  end

  def update
    current_user.friend_status << params[:id].to_i
    current_user.save
  end

  private
  def friend_params
    params.require(:friend).permit(:name, :age, :job, :avatar)
  end
  def set_friend
    @friend = Friend.find(params[:id])
  end
end

