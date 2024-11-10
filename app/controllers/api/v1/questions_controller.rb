class Api::V1::QuestionsController < ApplicationController
    protect_from_forgery with: :null_session
  
    def index
        if params[:tags].present? && params[:tags] != 'All'
            @questions = Question.where(tag: params[:tags])
        else
            @questions = Question.all
        end
      render json: @questions, status: :ok
    end
  
    def update_counter
      @question = Question.find(params[:id])
      if params[:count_for] == 'like'
        @question.update(likes_count: @question.likes_count + 1)
      elsif params[:count_for] == 'dislike'
        @question.update(dislikes_count: @question.dislikes_count + 1)
      end
      render json: @question, status: :ok
    end

    def create
      @question = Question.new(question_params)
      if @question.save
        render json: { data: @question, status: 'success' }, status: :ok
      else
        render json: { errors: @question.errors.full_messages, status: 'failure' }, status: :unprocessable_entity
      end
    end
# In a Rails controller, methods like question_params are often made private to ensure that they are not accessible directly by external requests. These methods are used as helpers for sanitizing input within the controller and aren't intended to be actions or endpoints.
    private

    def question_params
        params.require(:question).permit(:title, :tag)
    end
  
end