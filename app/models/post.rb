class Post < ActiveRecord::Base
  # Associations
  belongs_to :user
  belongs_to :category

  # Validation
  validates :title, presence: true, uniqueness: true
  validates :content, presence: true

  # mount the uploader
  mount_uploader :image, ImageUploader
end
