class Drink < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :priceml, presence: true
    validates :priceml, numericality: { greater_than: 0 }


    def self.ransackable_attributes(auth_object = nil)
        ["id", "id_value", "name", "priceml", "created_at", "updated_at"]
      end
end
