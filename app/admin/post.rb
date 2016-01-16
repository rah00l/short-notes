ActiveAdmin.register Post do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
  permit_params :title, :content, :user_id, :publish
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end

  form do |f|
    f.inputs "Activity Details" do       
      f.input :title
      f.input :content, as: :html_editor
      f.input :publish, as: :boolean,
        required: false, label: 'Check this box to allow publish this post'
    end
    f.actions
  end
end