Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
 
  namespace :api do
    resources :friends, only: [:index, :update, :create, :destroy]
    resources :friend_status, only: :index
  end
  

end
