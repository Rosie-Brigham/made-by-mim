class Product < ActiveRecord::Base
  has_attached_file :image,
    :styles => { :large => "600x600>", :medium => "300x300>", :thumb => "100x100>" },
    :default_url => "/images/:style/missing.png",
    :storage => :s3,
    :s3_credentials => "#{Rails.root}/config/s3.yml"

  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
