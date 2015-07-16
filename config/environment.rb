# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Load the app's custom environment variables here, before environments/*.rb
env_vars = File.join(Rails.root, 'config', 'initializers', 'env_vars.rb')
load(env_vars) if File.exists?(env_vars)

# Initialize the Rails application.
Rails.application.initialize!
