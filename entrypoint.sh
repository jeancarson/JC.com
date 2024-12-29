#!/bin/bash -e

# Enable jemalloc for reduced memory usage and latency.
if [ -z "${LD_PRELOAD+x}" ] && [ -f /usr/lib/*/libjemalloc.so.2 ]; then
  export LD_PRELOAD="$(echo /usr/lib/*/libjemalloc.so.2)"
fi

# Delete server.pid to avoid Rails server startup issues
rm -f tmp/pids/server.pid

# If running the rails server then create or migrate existing database
if [ "${1}" == "./bin/rails" ] && [ "${2}" == "server" ]; then
  echo "Preparing database..."
  
  # Check if database is up and running, then create and migrate it
  until bundle exec rake db:create; do
    echo "Waiting for the database to be ready..."
    sleep 2
  done
  
  # Run database migrations
  bundle exec rake db:migrate || { echo "Database migration failed"; exit 1; }
  
  # Run asset precompilation (only necessary in production)
  if [ "$RAILS_ENV" == "production" ]; then
    echo "Precompiling assets..."
    bundle exec rake assets:precompile || { echo "Assets precompilation failed"; exit 1; }
  fi
fi

# Make sure the application binds to the correct host and port
echo "Using port: $PORT"

# Start the Rails server
exec "$@"
