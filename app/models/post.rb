class Post < ActiveRecord::Base
  # Associations
  belongs_to :user
  belongs_to :category

  # Validation
  validates :title, presence: true, uniqueness: true
  validates :content, presence: true

  after_create :notify_post_created

  # mount the uploader
  mount_uploader :image, ImageUploader

  #for order default scope
  default_scope { order(created_at: :desc) }

  private
  # Intimate subscribed users that new post has been created.
  def notify_post_created
    PostMailer.post_created(self).deliver_now
  end
end
