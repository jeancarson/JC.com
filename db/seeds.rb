# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Question.destroy_all

if Rails.env.development? && !AdminUser.exists?(email: 'admin@example.com')
    AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
  end

if Rails.env.production? && !AdminUser.exists?(email: 'admin@example.com')
    AdminUser.create!(
      email: 'admin@example.com',
      password: Rails.application.credentials.admin[:password],
      password_confirmation: Rails.application.credentials.admin[:password]
    )
  end


# CountDownGameScore.destroy_all
puts 'Creating Questions...'
questions = Question.create ([
        { 
            title: "How to check if a id is present in a hash?", tag: "Ruby" 
        },
        { 
            title: "What is the difference between strings and symbol?", tag: "Ruby" 
        },        
        { 
            title: "What happens if you add two of the same ids in hash?", tag: "Ruby" 
        },
        { 
            title: "How to delete a given id from a hash?", tag: "Ruby" 
        },
        { 
            title: "How to check if two hashes are identical?", tag: "Ruby" 
        },
        { 
            title: "How to combine two hashes in Ruby", tag: "Ruby" 
        },
        { 
            title: "How to get uniwue ids from two hashes in Ruby?", tag: "Ruby" 
        },
        { 
            title: "What does the has_id?, id?, include?, member? do?", tag: "Ruby" 
        },
        { 
            title: "Does the order of keys matterwhen comparing two hashes?", tag: "Ruby" 
        }
    ])
puts 'Questions created!'

puts 'Creating countdown game scores...'
count_down_game_score = CountDownGameScore.create ([
        {
            initials: "ABC",
            score: 1000
        },
        {
            initials: "DEF",
            score: 2000
        },
        {
            initials: "GHI",
            score: 3000
        },
        {
            initials: "JKL",
            score: 4000
        },
        {
            initials: "MNO",
            score: 5000
        },
        {
            initials: "PQR",
            score: 6000
        },
        {
            initials: "STU",
            score: 7000
        },
        {
            initials: "VWX",
            score: 8000
        },
        {
            initials: "YZA",
            score: 9000
        },
        {
            initials: "BCD",
            score: 10000
        },
        {
            initials: "EFG",
            score: 20000
        }
    ])
puts 'Countdown game scores created!'

Drink.create(
  name: 'Orange Juice', 
  priceml: 0.05, 
  created_at: 'December 22, 2024 12:13', 
  updated_at: 'December 23, 2024 12:03', 
  description: 'ZESTY', 
  imagepath: 'orange-juice.png', 
  color: '#ffbb00'
)

Drink.create(
  name: 'Vodka', 
  priceml: 0.2, 
  created_at: 'December 22, 2024 12:12', 
  updated_at: 'December 23, 2024 12:04', 
  description: '37.5% ABV', 
  imagepath: 'smirnoff.jpg', 
  color: '#cfd0d3'
)

Drink.create(
  name: 'Tullamore Dew', 
  priceml: 0.2, 
  created_at: 'December 22, 2024 12:11', 
  updated_at: 'December 23, 2024 12:04', 
  description: "40% ABV, the best because it's from Tullamore", 
  imagepath: 'tullamore-dew.jpg', 
  color: '#d59a6f'
)

Drink.create(
  name: 'Ribena', 
  priceml: 0.0, 
  created_at: 'December 22, 2024 12:14', 
  updated_at: 'December 23, 2024 12:03', 
  description: 'Blackcurrant dilute', 
  imagepath: 'ribena.jpg', 
  color: '#2e183b'
)

Drink.create(
  name: 'Coors', 
  priceml: 0.01, 
  created_at: 'December 22, 2024 12:16', 
  updated_at: 'December 23, 2024 12:02', 
  description: '4.2% ABV', 
  imagepath: 'coors.jpg', 
  color: '#f25e1c'
)

Drink.create(
  name: 'White Wine', 
  priceml: 0.03, 
  created_at: 'December 22, 2024 12:17', 
  updated_at: 'December 23, 2024 12:02', 
  description: '12% ABV', 
  imagepath: 'white-wine.jpg', 
  color: '#f9e8c0'
)


puts 'Drinks created!'

