Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :users
  ActiveAdmin.routes(self)
  root "home#index"

  get 'play', to: 'count_game#play', as: 'play'
  get 'serious', to: 'serious_mood#look', as: 'serious'
  get 'drinkUP', to: 'drink_builder#index', as: 'drinkUP'
  get 'checkout', to: 'payments#create',  as: 'checkout'
  get '/health', to: proc { [200, {}, ['ok']] }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/*
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  # Defines the root path route ("/")
  # root "posts#index"

  namespace :api do
    namespace :v1 do
      # by default this maps to QuestionsController because of resources :questions
      resources :questions, only: [:index, :create] do
        member do
          put :update_counter
        end
      end
      resources :drinks, only: [:index, :create]
    end
  end
  resources :count_down_game_scores, only: [:create, :index]
  resources :payments, only: [:new, :create]

end