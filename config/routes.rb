Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
 
  namespace :api do
    resources :friend_status, only: :index
    resources :friends, only: [:index, :update, :create, :destroy, :show] do
      resources :posts
    end
    resources :posts, only: [] do
      # comments here
    end
  end
  get '*other', to: 'static#index'
end
