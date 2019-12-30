class Api::PostsController < ApplicationController

  before_action :set_friend
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: @friend.posts
  end

  def show
    render json: @post
  end

  def create
    post = @friend.posts.new(post_params)

    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: 422
    end
  end

  def destroy
    @post.destroy
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def set_friend
    @friend = Friend.find(params[:friend_id])
  end

  def post_params
    params.require(:post).permit(:title, :description )
  end
end
