class PostMailer < ApplicationMailer
  default from: "rahulpatil2387@gmail.com"

  def post_created(post)
    @post = post
    emails = Subscribe.all.collect(&:email).join(";")
    mail(:to => emails, :subject => "New post has been created ...#{post.title}")
  end

  def user_subscribe(mail_id)
    @email = mail_id
    mail(to: @email, subject: 'ShortNotes subscription confirmation')
  end
end
