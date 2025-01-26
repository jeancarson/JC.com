#!/bin/bash -e

# Delete server.pid to avoid Rails server startup issues
rm -f tmp/pids/server.pid

# Wait for database to be ready
echo "Waiting for database to be ready..."
until bundle exec rake db:version; do
  echo "Database is not ready - sleeping"
  sleep 2
done

# Create and migrate database
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed

# Precompile assets in production
if [ "$RAILS_ENV" == "production" ]; then
  echo "Precompiling assets..."
  bundle exec rake assets:precompile
fi

# Execute the passed command (typically starting the Rails server)
exec "$@"