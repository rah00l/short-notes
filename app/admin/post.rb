ActiveAdmin.register Post do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
  permit_params :title, :content, :user_id, :publish,:published_at, :category_id
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end

  index do
    column :title
    column :publish
    column :category
    column :user
    column :published_at
    column :updated_at
    column :created_at
    actions
  end

  form do |f|
    f.inputs "Activity Details" do
      f.input :title
      f.input :content, as: :html_editor
      f.input :publish, as: :boolean,
                        required: false,
                        label: 'Check this box to allow publish this post'
      f.input :published_at, as: :datepicker
      f.input :category_id, as: :select, collection: Category.all.map{|cat| [cat.name, cat.id]}
      f.input :user_id, as: :select, collection: User.all.map{|usr| [usr.email, usr.id]}
    end
    f.actions
  end
end
