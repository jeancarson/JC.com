class Drink < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :priceml, presence: true
    validates :priceml, numericality: { greatergreater_than_or_equal_to_than: 0 }


    def self.ransackable_attributes(auth_object = nil)
        ["id", "id_value", "name", "description", "imagepath", "priceml", "color", "created_at", "updated_at"]
      end
end
