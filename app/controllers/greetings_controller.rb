# frozen_string_literal: true

class GreetingsController < ApplicationController
  def random
    render json: Greeting.order('RANDOM()').first
  end
end
