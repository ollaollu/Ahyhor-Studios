source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.0'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
gem 'coffee-script-source', '1.8.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
end

group :production do
	#Use Amozin S3 for image uploads in production
  gem 'dragonfly-s3_data_store'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'refinerycms', git: 'https://github.com/refinery/refinerycms', branch: 'master'

gem 'quiet_assets', :group => :development

# Add support for searching inside Refinery's admin interface.
gem 'refinerycms-acts-as-indexed', ['~> 2.0', '>= 2.0.0']

# Add support for Refinery's custom fork of the visual editor WYMeditor.
gem 'refinerycms-wymeditor', ['~> 1.0', '>= 1.0.6']

# Add support for Refinery's slideshow extension
gem 'refinerycms-image_slideshows', git: 'https://github.com/bisscomm/refinerycms-image-slideshows', branch: 'master'

# Add support for Refinery's page-images extension
gem "refinerycms-page-images", git: "https://github.com/refinery/refinerycms-page-images", branch: "master"

# Add Refinery inquiries and contact page extension
gem 'refinerycms-inquiries', git: "https://github.com/refinery/refinerycms-inquiries", branch: "master"

# Add support for Refinery's blog extension
gem 'refinerycms-blog', git: 'https://github.com/refinery/refinerycms-blog', branch: 'master'

# Add support for Refinery's portfolio extension
gem 'refinerycms-portfolio', git: 'https://github.com/refinery/refinerycms-portfolio.git', branch: 'qa-3-0-0'


