class CountDownGameScore < ApplicationRecord
    # Ensure initials are always uppercase, 3 characters, and unique
    validates :initials, presence: true, uniqueness: true, length: { is: 3 }, format: { with: /\A[A-Z]+\z/, message: "must be uppercase letters" }
  
    # Ensure score is present and a positive float
    validates :score, presence: true, numericality: { greater_than_or_equal_to: 0 }
  
    # Class method to handle updates or inserts
    def self.submit_score(initials, new_score)
      # Normalize initials to uppercase
      initials = initials.upcase
  
      # Find or initialize a record for the given initials
      score_record = find_or_initialize_by(initials: initials)
  
      # Update the score only if the new score is lower (closer to zero)
      if score_record.new_record? || new_score < score_record.score
        score_record.update(score: new_score)
      end
  
      score_record
    end
    def self.ransackable_attributes(auth_object = nil)
      ["id", "id_value", "initials", "score", "created_at", "updated_at"]
    end
  end
  