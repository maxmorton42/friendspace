# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


20.times do
  name = Faker::Books::Dune.character
  age = Faker::Number.number(digits: 2)
  job = Faker::Books::Dune.title
  avatar = Faker::Avatar.image(slug: name, size: '100x235', format: 'png', set: 'set4')
  Friend.create(name: name, age: age, job: job, avatar: avatar)
end

puts "20 Cats Seeded"
