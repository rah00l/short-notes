module PostsHelper
  # action to pick randum image from bunch of images
  def pick_image_name(size)
    ["#{size}_1.png", "#{size}_2.jpg", "#{size}_3.png", "#{size}_4.jpg", "#{size}_5.png", "#{size}_6.jpg", "#{size}_7.jpg", "#{size}_8.jpg"].sample
  end
end
