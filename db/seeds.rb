# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
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