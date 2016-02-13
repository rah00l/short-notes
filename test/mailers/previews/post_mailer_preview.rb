# Preview all emails at http://localhost:3000/rails/mailers/post_mailer
class PostMailerPreview < ActionMailer::Preview
	def post_created
		PostMailer.post_created(Post.first)
	end
end
