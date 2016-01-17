class Category < ActiveRecord::Base
  # Associations
  has_many :posts

  # Validation
  validates :name, presence: true, uniqueness: true
end
