# frozen_string_literal: true

Rails.application.routes.draw do
  root 'root#index'
  get '/random_greeting', to: 'greetings#random'
end
