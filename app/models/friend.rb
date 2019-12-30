class Friend < ApplicationRecord
  has_many :posts, dependent: :destroy
end


