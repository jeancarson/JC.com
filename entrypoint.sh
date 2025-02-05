#!/bin/bash -e

# Remove the server.pid file if it exists
rm -f tmp/pids/server.pid

# Wait for the RDS database to be ready
until pg_isready -h ${RDS_HOSTNAME} -U ${RDS_USERNAME}; do
  echo "Waiting for database..."
  sleep 2
done

# Run database migrations
bundle exec rake db:migrate

# Seed the database (if needed)
bundle exec rake db:seed

# Precompile assets in production
if [ "$RAILS_ENV" == "production" ]; then
  bundle exec rake assets:precompile
fi

# Start the Rails server
exec "$@"