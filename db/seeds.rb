# This file should contain all the record creation needed to seed the database
# with its default values.
# The data can then be loaded with the rake db:seed
# (or created alongside the db with db:setup).
#
# Examples:
#
puts 'Creating admin user to start application with one user'
# Creating admin user to start application with one user
admin_user = User.find_by_email('rahulpatil2387@gmail.com')
admin_user.destroy if admin_user
one_user = User.create! email: 'rahulpatil2387@gmail.com',
             password: 'rah00l2387',
             password_confirmation: 'rah00l2387',
             admin: true

puts 'Creating some basic categories..'
cat1 = Category.find_or_create_by(name: 'general')
cat2 = Category.find_or_create_by(name: 'ruby')
cat3 = Category.find_or_create_by(name: 'rails')


puts "Deleting all posts..."
Post.delete_all
puts "Creating few posts..."

Post.create! title: "Programming language", created_at: (rand*370).days.ago, category_id: cat1.id, user_id: one_user.id, content: <<-ARTICLE
Robin is the name of several fictional characters appearing in comic books published by DC Comics, originally created by Bob Kane, Bill Finger and Jerry Robinson, as a junior counterpart to DC Comics superhero Batman. The team of Batman and Robin is commonly referred to as the Dynamic Duo or the Caped Crusaders. (from Wikipedia)
ARTICLE

Post.create! title: "About Ruby", created_at: (rand*161).days.ago, user_id: one_user.id, category_id: cat2.id, content: <<-ARTICLE
Ruby is a language of careful balance. Its creator, Yukihiro Matz Matsumoto, blended parts of his favorite languages (Perl, Smalltalk, Eiffel, Ada, and Lisp) to form a new language that balanced functional programming with imperative programming.
He has often said that he is 'trying to make Ruby natural, not simple,' in a way that mirrors life.Building on this, he adds:Ruby is simple in appearance, but is very complex inside, just like our human body1.
ARTICLE

Post.create! title: "About Rails", created_at: (rand*61).days.ago, category_id: cat3.id, user_id: one_user.id, content: <<-ARTICLE
This guide is designed for beginners who want to get started with a Rails application from scratch. It does not assume that you have any prior experience with Rails. However, to get the most out of it, you need to have some prerequisites installed:
ARTICLE

Post.create! title: "What is Rails?", created_at: (rand*112).days.ago, category_id: cat3.id, user_id: one_user.id, content: <<-ARTICLE
Rails is a web application development framework written in the Ruby language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started. It allows you to write less code while accomplishing more than many other languages and frameworks. Experienced Rails developers also report that it makes web application development more fun.
ARTICLE

Post.create! title: "Don't Repeat Yourself", created_at: (rand*161).days.ago, category_id: cat3.id, user_id: one_user.id, content: <<-ARTICLE
DRY is a principle of software development which states that "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system." By not writing the same information over and over again, our code is more maintainable, more extensible, and less buggy.
ARTICLE

Post.create! title: "Convention Over Configuration", created_at: (rand*31).days.ago, category_id: cat3.id, user_id: one_user.id, content: <<-ARTICLE
Rails has opinions about the best way to do many things in a web application, and defaults to this set of conventions, rather than require that you specify every minutiae through endless configuration files.
ARTICLE
