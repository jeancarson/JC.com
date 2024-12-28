class Drink < ApplicationRecord
    validates :name, presence: true, uniqueness: true, length: { maximum: 15 }
    validates :description, presence: true, length: { maximum: 50 }
    validates :priceml, presence: true
    validates :priceml, numericality: { greater_than_or_equal_to: 0 }
    validates :imagepath, presence: true

    def self.ransackable_attributes(auth_object = nil)
        ["id", "id_value", "name", "description", "imagepath", "priceml", "color", "created_at", "updated_at"]
      end
end
