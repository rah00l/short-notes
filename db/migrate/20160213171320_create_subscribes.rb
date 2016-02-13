class CreateSubscribes < ActiveRecord::Migration
  def change
    create_table :subscribes do |t|
      t.string :email
      t.boolean :confirm, default: false

      t.timestamps null: false
    end
  end
end
