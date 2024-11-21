class CountDownGameScoresController < ApplicationController
    # skip_before_action :verify_authenticity_token, only: [:create, :index]
    protect_from_forgery with: :null_session


    def create
        initials = params[:initials]
        score = params[:score].to_f
    
        # Call the model's method to handle the logic
        score_record = CountDownGameScore.submit_score(initials, score)
    
        if score_record.persisted?
          render json: { message: "Score submitted successfully", score: score_record }, status: :ok
        else
          render json: { errors: score_record.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
      # GET /scores
      def index
        scores = CountDownGameScore.order(:score)
        render json: scores, status: :ok
      end
end
