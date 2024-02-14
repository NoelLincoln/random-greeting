class GreetingsController < ApplicationController
  def random
    render json: Greeting.order("RANDOM()").first
  end
end
